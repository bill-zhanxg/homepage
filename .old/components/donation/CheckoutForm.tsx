import { LinkAuthenticationElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CheckoutForm({
	paymentLoaded,
	showPopup,
}: {
	paymentLoaded: () => void;
	showPopup: (message: string, isClient: boolean, success?: boolean) => void;
}) {
	const stripe = useStripe();
	const elements = useElements();

	const [email, setEmail] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!stripe || !elements) return;

		setIsLoading(true);

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: process.env.NEXT_PUBLIC_PAYMENT_REDIRECT_URL,
				receipt_email: email,
			},
		});

		if (error.type !== 'validation_error' && error.message) showPopup(error.message!, true);

		setIsLoading(false);
	};

	return (
		<motion.form
			initial={{
				opacity: 0,
				y: -100,
				filter: 'blur(10px)',
			}}
			whileInView={{
				opacity: 1,
				y: 0,
				filter: 'blur(0px)',
				transition: {
					duration: 1,
					ease: 'easeInOut',
				},
			}}
			viewport={{ once: true }}
			exit={{
				opacity: 0,
				y: -100,
				filter: 'blur(10px)',
				transition: {
					duration: 0.3,
				},
			}}
			onSubmit={handleSubmit}
			className="p-4 border-solid border-green-700 border-2 rounded-lg w-full"
		>
			<LinkAuthenticationElement
				id="link-authentication-element"
				onChange={(event) => setEmail(event.value.email)}
				onReady={paymentLoaded}
			/>
			<PaymentElement options={{ layout: 'tabs' }} />
			<button disabled={isLoading || !stripe || !elements} className="btn btn-block mt-4">
				<span>{isLoading ? <div className="spinner"></div> : 'Pay now'}</span>
			</button>
		</motion.form>
	);
}
