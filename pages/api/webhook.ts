import type { NextApiRequest, NextApiResponse } from 'next';

import handleServerError from 'libs/handleServerError';
import { stripe } from 'libs/stripe';

export const config = {
	api: {
		bodyParser: false,
	},
};

function buffer(req: NextApiRequest) {
	return new Promise<Buffer>((resolve, reject) => {
		let chunks: Uint8Array[] = [];

		req.on('data', (chunk: Uint8Array) => {
			chunks.push(chunk);
		});

		req.on('end', () => {
			resolve(Buffer.concat(chunks));
		});

		req.on('error', reject);
	});
}

function formatText(title: string, texts: (string | number | undefined | null)[]) {
	texts = texts.filter((text) => text === 0 || text);
	if (!texts.length) return '';
	return `${title}: **${texts.map((text) => text).join(' ')}**\n`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const sig = req.headers['stripe-signature'];
		if (!sig) return;

		try {
			const body = await buffer(req);
			const event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_ENDPOINT_SECRET);

			switch (event.type) {
				// TODO: I think it might be checkout.session.async_payment_succeeded
				case 'charge.succeeded':
					const chargeSucceeded = event.data.object as {
						amount?: number;
						amount_captured?: number;
						amount_refunded?: number;
						billing_details?: {
							address?: {
								city?: string | null;
								country?: string | null;
								line1?: string | null;
								line2?: string | null;
								postal_code?: string | null;
								state?: string | null;
							};
							email?: string | null;
							name?: string | null;
							phone?: string | null;
						};
						currency?: string;
						description?: string | null;
						id?: string;
						payment_intent?: string;
						payment_method?: string;
						receipt_email?: string;
						receipt_url?: string;
					};

					fetch(process.env.STRIPE_PAYMENT_WEBHOOK, {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							embeds: [
								{
									color: 7274240,
									author: {
										name: chargeSucceeded?.receipt_email,
									},
									title: 'New Payment Succeeded',
									timestamp: new Date().toISOString(),
									description: `${formatText('Amount', [
										chargeSucceeded.amount,
										chargeSucceeded.currency?.toUpperCase(),
									])}${formatText('Amount Captured', [
										chargeSucceeded.amount_captured,
										chargeSucceeded.currency?.toUpperCase(),
									])}${formatText('Amount Refunded', [
										chargeSucceeded.amount_refunded,
										chargeSucceeded.currency?.toUpperCase(),
									])}${formatText('Description', [chargeSucceeded.description])}${formatText('Billing Email', [
										chargeSucceeded.billing_details?.email,
									])}${formatText('Billing Name', [chargeSucceeded.billing_details?.name])}${formatText(
										'Billing Phone',
										[chargeSucceeded.billing_details?.phone],
									)}${formatText('Billing Address', [
										chargeSucceeded.billing_details?.address?.line1,
										chargeSucceeded.billing_details?.address?.line2,
										chargeSucceeded.billing_details?.address?.city,
										chargeSucceeded.billing_details?.address?.state,
										chargeSucceeded.billing_details?.address?.postal_code,
										chargeSucceeded.billing_details?.address?.country,
									])}${formatText('Receipt URL', [
										chargeSucceeded.receipt_url ? `[Click me](${chargeSucceeded.receipt_url})` : null,
									])}${formatText('Payment ID', [chargeSucceeded.id])}${formatText('Payment Intent', [
										chargeSucceeded.payment_intent,
									])}${formatText('Payment Method', [chargeSucceeded.payment_method])}`,
								},
							],
						}),
					}).catch((err) => console.error(err));
					break;
			}

			res.status(200).end();
			return;
		} catch (err: any) {
			handleServerError(err);
			res.status(400).send(`Webhook Error: ${encodeURI(err.message)}`);
			return;
		}
	}
}
