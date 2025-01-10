import { Elements } from '@stripe/react-stripe-js';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import Description from 'components/Description';
import Title from 'components/Title';
import CheckoutForm from 'components/donation/CheckoutForm';
import { AnimatePresence, motion, useAnimate } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaDesktop, FaRegTimesCircle, FaServer } from 'react-icons/fa';

import classNames from 'classnames';
import { default as currencies } from '../libs/currencies.json';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
let currentPopup: NodeJS.Timeout | undefined;

export default function Donation() {
	const [donateLoading, setDonateLoading] = useState(false);
	const [amountEnabled, setAmountEnabled] = useState(true);
	const [donateEnabled, setDonateEnabled] = useState(true);
	const [paymentText, setPaymentText] = useState<'Donate' | 'Back'>('Donate');
	const [clientSecret, setClientSecret] = useState<string>();
	const [userCurrency, setUserCurrency] = useState<string>();
	const [error, setError] = useState<{ message: string; isClient: boolean; success: boolean } | undefined>();
	const amount = useRef<HTMLInputElement>(null);
	const currency = useRef<HTMLSelectElement>(null);
	const [popupElement, animateErrorElement] = useAnimate();
	const router = useRouter();

	useEffect(() => {
		fetch('https://ipapi.co/json/')
			.then((res) => res.json())
			.then((data) => {
				if (currencies.map((o) => o.currency).includes(data?.currency.toLowerCase()))
					return setUserCurrency(data.currency.toLowerCase());
				setUserCurrency('usd');
			})
			.catch(() => setUserCurrency('usd'));
	}, []);

	const options: StripeElementsOptions = {
		clientSecret,
		appearance: {
			theme: 'night',
		},
	};

	function mainOnScroll(event: React.UIEvent<HTMLDivElement, UIEvent>) {
		if (popupElement.current) {
			popupElement.current.style.bottom =
				event.currentTarget.scrollTop < 40
					? `${40 - event.currentTarget.scrollTop}px`
					: `-${event.currentTarget.scrollTop - 40}px`;
		}
	}

	const showPopup = useCallback(
		(message: string, isClient: boolean, success: boolean = false) => {
			setError({ message, isClient, success });

			animateErrorElement(
				popupElement.current,
				{
					y: 0,
					opacity: 1,
					filter: 'blur(0px)',
				},
				{ duration: 0.5, ease: 'easeInOut', type: 'spring', mass: 0.5, damping: 10, stiffness: 100, velocity: 2 },
			);

			if (currentPopup !== undefined) clearTimeout(currentPopup);

			const localPopup = setTimeout(() => {
				animateErrorElement(
					popupElement.current,
					{ y: 100, opacity: 0, filter: 'blur(10px)' },
					{
						duration: 0.3,
					},
				)
					.then(() => {
						if (localPopup === currentPopup) {
							setError(undefined);
							currentPopup = undefined;
						}
					})
					.catch(() => {});
			}, 3000);

			currentPopup = localPopup;
		},
		[animateErrorElement, popupElement],
	);

	function handlePaymentError(message: string, isClient: boolean) {
		setDonateLoading(false);
		setAmountEnabled(true);
		showPopup(message, isClient);
	}

	function donateOrBack() {
		if (paymentText === 'Donate') {
			setDonateLoading(true);
			setAmountEnabled(false);
			fetch('/api/create-payment-intent', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					amount: parseFloat(amount.current?.value || ''),
					currency: currency.current?.value,
				}),
			})
				.then((res) => {
					res
						.json()
						.then((data) => {
							if (res.ok)
								return data.clientSecret
									? setClientSecret(data.clientSecret)
									: handlePaymentError('Client secret can not be found in the server response.', false);
							handlePaymentError(data.message || 'Unknown error occurred', res.status >= 400 && res.status < 500);
						})
						.catch((err: Error) => handlePaymentError(err.message + '. Something went very wrong.', true));
				})
				.catch((err: Error) =>
					// No Internet connection
					handlePaymentError(err.message + '. Please check your internet connection and try again.', true),
				);
		} else {
			setClientSecret(undefined);
			setAmountEnabled(true);
			setPaymentText('Donate');
		}
	}

	function paymentLoaded() {
		setDonateLoading(false);
		setPaymentText('Back');
	}

	useEffect(() => {
		const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret');
		stripePromise
			.then((stripe) => {
				if (!stripe || !clientSecret) return;

				stripe
					.retrievePaymentIntent(clientSecret)
					.then(({ paymentIntent }) => {
						if (paymentIntent !== undefined) {
							switch (paymentIntent.status) {
								case 'succeeded':
									showPopup('Your payment was successful!', false, true);
									break;
								case 'processing':
									showPopup('Your payment is being processed.', false, true);
									break;
								case 'requires_payment_method':
									showPopup('Your payment was not successful, please try again.', false);
									break;
								default:
									showPopup(`Something went wrong, please try again. Status: ${paymentIntent.status}`, false);
									break;
							}
						}
					})
					.catch(() => showPopup('Something went wrong, please try again.', false));

				router.replace('/donation', undefined, { shallow: true });
			})
			.catch(() => {
				showPopup('Something went wrong, please try again.', false);
				router.replace('/donation', undefined, { shallow: true });
			});
	}, [showPopup, router]);

	return (
		<>
			<Head>
				<title>Donation - Bill.IHCha</title>
			</Head>
			<motion.div
				initial="hidden"
				animate="show"
				exit={{ y: -10, opacity: 0 }}
				variants={{
					show: { transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
				}}
				onScroll={mainOnScroll}
				className="relative pt-12 pb-6 p-2 sm:pt-12 md:p-10 lg:p-14 overflow-y-scroll h-full"
			>
				<div className="flex flex-col items-center text-center gap-2">
					<Title>Donation</Title>
					<Description>
						I enjoy creating software for various ventures. However, maintaining operations takes up a lot of time and
						resources. That is why I ask for charitable contributions to cover costs and keep me motivated. If you enjoy
						my work, please consider donating. I am legally required to offer something in return for your support when
						using{' '}
						<Link
							href="https://support.stripe.com/questions/requirements-for-accepting-tips-or-donations"
							target="_blank"
							className="link link-primary"
						>
							Stripe
						</Link>
						, so I provide access to the source code. Thank you for your help and encouragement!
					</Description>
					<motion.div
						variants={{
							hidden: {
								opacity: 0,
								x: 50,
								filter: 'blur(10px)',
							},
							show: {
								opacity: 1,
								x: 0,
								filter: 'blur(0px)',
								transition: {
									duration: 0.5,
									ease: 'easeOut',
								},
							},
						}}
						className="flex flex-row gap-4 w-full"
					>
						<div className="flex item-center w-full">
							<input
								ref={amount}
								type="text"
								placeholder="Amount"
								defaultValue="10"
								className="input input-bordered input-primary border-r-0 rounded-r-none w-full"
								onInput={(event) => {
									const matched = event.currentTarget.value.match(/[1-9]\d{0,5}\.(\d{0,2})?|[1-9]\d{0,5}|0\.\d{0,2}|0/);
									if (!matched) {
										event.currentTarget.value = '';
										setDonateEnabled(false);
										return;
									}
									event.currentTarget.value = matched[0];
									if (event.currentTarget.value.match(/^([1-9]\d{0,5}|\d{1,6}\.\d{1,2})$/)) setDonateEnabled(true);
									else setDonateEnabled(false);
								}}
								disabled={amountEnabled ? false : true}
							/>
							<div
								className={
									'w-1 border-y-[1px] input-primary' +
									(!amountEnabled ? ' border-none bg-[#262b36] cursor-not-allowed' : '')
								}
							/>
							{userCurrency && (
								<select
									title="Currency"
									ref={currency}
									className="select max-w-xs input-primary border-l-0 rounded-l-none focus:border-l-0 focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-2 uppercase"
									disabled={amountEnabled ? false : true}
									defaultValue={userCurrency}
								>
									{currencies.map((currency, index) => (
										<option key={index}>{currency.currency}</option>
									))}
								</select>
							)}
						</div>
						<button
							className={
								'btn btn-primary transition-all duration-200' +
								(!donateEnabled && ' btn-disabled') +
								(donateLoading ? ' btn-disabled w-12' : ' w-20')
							}
							onClick={donateOrBack}
						>
							{donateLoading ? <div className="spinner"></div> : paymentText}
						</button>
					</motion.div>
					<AnimatePresence mode="wait">
						{clientSecret && (
							<Elements options={options} stripe={stripePromise}>
								<CheckoutForm paymentLoaded={paymentLoaded} showPopup={showPopup} />
							</Elements>
						)}
					</AnimatePresence>
				</div>
				<motion.div
					initial={{ y: 100, opacity: 0, filter: 'blur(10px)' }}
					ref={popupElement}
					className={classNames(
						'alert shadow-lg overflow-hidden absolute w-[95%] left-[50%] -translate-x-new-half bottom-10',
						{
							hidden: !error,
							'alert-success shadow-green-400': error?.success,
							'alert-error shadow-red-400': !error?.success,
						},
					)}
				>
					<div className="flex flex-col items-center justify-center w-full text-lg font-bold">
						<div
							className={
								'uppercase flex flex-row items-center justify-center gap-2' + (error?.success ? ' hidden' : '')
							}
						>
							{error?.isClient ? <FaDesktop /> : <FaServer />}
							{error?.isClient ? 'client' : 'server'} error
							<FaRegTimesCircle />
						</div>
						<span>{error?.message}</span>
					</div>
				</motion.div>
			</motion.div>
		</>
	);
}
