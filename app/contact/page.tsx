import { AlertType } from '../globalComponents/Alert';
import { Contact } from './Contact';

export default function Page() {
	async function contactFormAction(prevState: AlertType, formData: FormData): Promise<AlertType> {
		'use server';
		// Handle form submission
		return { type: 'success', message: 'Message sent successfully!' };
	}

	return <Contact contactFormAction={contactFormAction} />;
}
