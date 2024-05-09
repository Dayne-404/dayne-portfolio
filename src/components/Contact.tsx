import SectionHeader from './SectionHeader';
import '../styles/contact.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Success from './Form/Success';
import Failure from './Form/Failure';
import Loading from './Form/Loading';
const SEND_EMAIL = true;

type FormStatus = 'idle' | 'loading' | 'success' | 'failure';

function Contact() {
	const [formStatus, setFormStatus] = useState<FormStatus>('idle');

	const resetForm = () => {
		setFormStatus('idle');
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.target as HTMLFormElement);
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		const message = formData.get('message') as string;

		if (!name.trim() || !email.trim() || !message.trim()) {
			alert('Please fill all required fields');
			return;
		}

		if (!isValidEmail(email)) {
			alert('Please enter a valid email address');
			return;
		}

		if (!SEND_EMAIL) {
			setFormStatus('failure');
			return;
		}

		setFormStatus('loading');
		try {
			await emailjs.sendForm(
				'service_ezsk0id',
				'template_9t0333i',
				event.target as HTMLFormElement,
				{ publicKey: 'agR247SvvRkluA3OR' }
			);
			setFormStatus('success');
		} catch (error) {
			console.error('Email sending failed: ', error);
			setFormStatus('failure');
		}
	};

	const isValidEmail = (email: string) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	let content: React.ReactNode;
	switch (formStatus) {
		case 'success':
			content = <Success resetForm={resetForm} />
			break;
		case 'failure':
			content = <Failure resetForm={resetForm} />
			break;
		case 'loading':
			content = <Loading />;
			break;
		default:
			content = (
				<form onSubmit={handleSubmit}>
					<label>
						Name
						<input type="text" name="name" required />
					</label>
					<label>
						Subject
						<input type="text" name="subject" required />
					</label>
					<label>
						Email
						<input type="text" name="email" required />
					</label>
					<label>
						Message
						<textarea maxLength={300} name="message" required />
					</label>
					<input className="submit-btn" type="submit" />
				</form>
			);
			break;
	}

	return (
		<div id="contact" className="contact content-container">
			<SectionHeader number="03." title="CONTACT" />
			{content}
		</div>
	);
}

export default Contact;
