import { useRef, useState } from "react";

const Contact = () => {
	const formRef = useRef();
	const [loading, setLoading] = useState(false);
	const [form, setform] = useState({ name: "", email: "", message: "" });

	const handleChange = ({ target: { name, value } }) => {
		setform({ ...form, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		// Update recipient-email@example.com accordingly
		const mailtoLink = `mailto:recipient-email@example.com?subject=Message from ${form.name}&body=${form.message}%0D%0A%0D%0AFrom: ${form.email}`;

		window.location.href = mailtoLink;
		setLoading(false);
	};

	return (
		<section className='c-space my-20' aria-label='Contact' id='contact'>
			<div className='relative z-0 flex min-h-screen flex-col items-center justify-center'>
				<img
					src='/assets/terminal.png'
					alt='terminal background'
					className='absolute inset-0 hidden min-h-screen sm:block'
				/>
				<div className='contact-container'>
					<h2 className='head-text'>Contact Me</h2>
					<p className='mt-3 text-lg text-white-600'>
						Whether you’re looking to build a new website, improve your existing
						platform, or bring a unique project to life, I’m here to help.
					</p>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className='mt-12 flex flex-col space-y-7'
					>
						<label htmlFor='fullName' className='space-y-3'>
							<span className='field-label'>Full Name</span>
							<input
								type='text'
								name='name'
								id='fullName'
								value={form.name}
								onChange={handleChange}
								required
								className='field-input'
								placeholder='Jhon Doe'
							/>
						</label>
						<label htmlFor='Email' className='space-y-3'>
							<span className='field-label'>Email</span>
							<input
								type='email'
								name='email'
								id='Email'
								value={form.email}
								onChange={handleChange}
								required
								className='field-input'
								placeholder='jhondoe@example.com'
							/>
						</label>
						<label htmlFor='yourMessage' className='space-y-3'>
							<span className='field-label'>Your Message</span>
							<textarea
								name='message '
								id='yourMessage'
								value={form.message}
								onChange={handleChange}
								required
								rows={5}
								className='field-input'
								placeholder='Hi, I have a mission for you ...'
							/>
						</label>
						<button className='field-btn' type='submit' disabled={loading}>
							{loading ? "Sending..." : "Send Message"}
							<img src='/assets/arrow-up.png' className='field-btn_arrow' />
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
