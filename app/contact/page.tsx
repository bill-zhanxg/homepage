import { resend, resendFrom } from '@/libs/resend';
import { AlertType } from '../globalComponents/Alert';
import { Contact } from './Contact';

export default function Page() {
	async function contactFormAction(prevState: AlertType, formData: FormData): Promise<AlertType> {
		'use server';
		try {
			const name = formData.get('name');
			const email = formData.get('email');
			const message = formData.get('message');

			// Validate the input
			if (!name || !email || !message) {
				return { type: 'error', message: 'Please fill out all fields' };
			}

			// Send the email
			const { data, error } = await resend.emails.send({
				from: `Contact Form <${resendFrom}>`,
				to: 'contact@mail.bill-zhanxg.com',
				subject: 'New Website Request',
				text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
				html: `<strong>Name:</strong> ${name}<br>
						<strong>Email:</strong> ${email}<br>
						<strong>Message:</strong> ${message}`,
			});

			if (error) {
				console.error('Error sending email:', error);
				return { type: 'error', message: 'Error sending email' };
			}

			return { type: 'success', message: 'Message sent successfully' };
		} catch (error) {
			console.error('Error processing request:', error);
			return { type: 'error', message: 'Error processing request' };
		}
	}

	return <Contact contactFormAction={contactFormAction} />;
}
