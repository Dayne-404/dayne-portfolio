import SectionHeader from './SectionHeader';
import '../styles/contact.css';
import { useState } from 'react';

interface FormData {
	name: string;
	email: string;
	message: string;
}

function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		alert(
			`The name you entered was: ${formData.name}\n${formData.email}\n${formData.message}`
		);
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setFormData((values) => ({ ...values, [name]: value }));
	};

	return (
		<div id='contact' className="contact content-container">
			<SectionHeader number="03." title="CONTACT" />
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input
						type="text"
						value={formData.name}
						onChange={handleChange}
						name="name"
					/>
				</label>
				<label>
					Email
					<input
						type="text"
						value={formData.email}
						onChange={handleChange}
						name="email"
					/>
				</label>
				<label>
					Message
					<textarea
						maxLength={300}
						value={formData.message}
						onChange={handleChange}
						name="message"
					/>
				</label>
				<input className="submit-btn" type="submit" />
			</form>
		</div>
	);
}

export default Contact;
