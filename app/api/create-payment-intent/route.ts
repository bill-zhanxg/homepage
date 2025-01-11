import Stripe from 'stripe';

import { stripe } from '@/libs/stripe';
import { default as currencies } from '../../../libs/currencies.json';
import handleServerError from '../../../libs/handleServerError';

function formatAmount(amount: any) {
	if (amount === undefined) return new Error('Amount can not be undefined');
	if (typeof amount !== 'number') return new Error('Amount can only be a number');
	if (amount < 0) return new Error('Amount can not be negative');
	if (amount > 99999999) return new Error('Amount can not be greater than 999999.99');
	return amount * 100;
}

function checkCurrency(currency: any, amount: number) {
	if (currency === undefined) return new Error('Currency can not be undefined');
	if (typeof currency !== 'string') return new Error('Currency can only be a string');
	const currencyObject = currencies.find((o) => o.currency === currency);
	if (!currencyObject) return new Error('Currency is not supported');
	if (amount / 100 < currencyObject.minimum)
		return new Error(`Minimum amount for this currency is ${currencyObject.minimum}`);
	return currency;
}

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { amount, currency } = body;

		const cleanedAmount = formatAmount(amount);
		if (cleanedAmount instanceof Error) {
			return Response.json({ message: cleanedAmount.message }, { status: 400 });
		}

		const cleanedCurrency = checkCurrency(currency, cleanedAmount);
		if (cleanedCurrency instanceof Error) {
			return Response.json({ message: cleanedCurrency.message }, { status: 400 });
		}

		const paymentIntent = await stripe.paymentIntents.create({
			description: 'Donation Payment',
			amount: cleanedAmount,
			currency: cleanedCurrency,
			automatic_payment_methods: {
				enabled: true,
			},
		});

		return Response.json({ clientSecret: paymentIntent.client_secret });
	} catch (err) {
		if (err instanceof Stripe.errors.StripeError) {
			if (err.code === 'parameter_invalid_integer') {
				return Response.json({ message: err.message }, { status: 400 });
			}
			handleServerError(err);
			return Response.json({ message: err.message }, { status: 500 });
		}
		return Response.json({ message: 'Internal Server Error' }, { status: 500 });
	}
}
