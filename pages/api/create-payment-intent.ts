import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

import { default as currencies } from '../../libs/currencies.json';
import handleServerError from '../../libs/handleServerError';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: '2022-11-15',
});

function formatAmount(amount: any) {
	if (amount === undefined) return new Error('Amount can not be undefined');
	if (typeof amount !== 'number') return new Error('Amount can only be a number');
	if (amount < 0) return new Error('Amount can not be negative');
	if (amount > 99999999) return new Error('Amount can not be greater than 999999.99');
	return amount * 100;
}

function checkCurrency(currency: any) {
	if (currency === undefined) return new Error('Currency can not be undefined');
	if (typeof currency !== 'string') return new Error('Currency can only be a string');
	if (!currencies.includes(currency)) return new Error('Currency is not supported');
	return currency;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	return new Promise((promiseResolve) => {
		const resolve = () => {
			promiseResolve(null);
			return true;
		};

		const { amount, currency } = req.body;

		const cleanedAmount = formatAmount(amount);
		const cleanedCurrency = checkCurrency(currency);
		if (cleanedAmount instanceof Error) return resolve() && res.status(400).send({ message: cleanedAmount.message });
		if (cleanedCurrency instanceof Error) return resolve() && res.status(400).send({ message: cleanedCurrency.message });

		stripe.paymentIntents
			.create({
				description: 'Donation Payment',
				amount: cleanedAmount,
				currency: cleanedCurrency,
				automatic_payment_methods: {
					enabled: true,
				},
			})
			.then((paymentIntent) => {
				res.send({
					clientSecret: paymentIntent.client_secret,
				});
				resolve();
			})
			.catch((err: Error) => {
				res.status(500).send({ message: err.message });
				handleServerError(err);
				resolve();
			});
	});
}
