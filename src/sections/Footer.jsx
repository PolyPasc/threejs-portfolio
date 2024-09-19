import { socials } from "../constants";

const Footer = () => {
	return (
		<footer id='footer' className='c-space border-t border-black-300 pb-3 pt-7'>
			<div className='flex flex-wrap items-center justify-between gap-5'>
				<div className='mx-auto flex gap-2 text-white-500'>
					<a className='cursor-pointer' href=''>
						Terms & Conditions
					</a>
					|
					<a className='cursor-pointer' href=''>
						Privacy Policy
					</a>
				</div>
				<div className='mx-auto flex gap-3'>
					{socials.map(({ id, href, name, src }) => (
						<a
							key={id}
							href={href}
							target='_blank'
							rel='noopener noreferrer'
							className='social-icon'
						>
							<img src={src} alt={name} title={name} className='size-1/2' />
						</a>
					))}
				</div>
				<p className='mx-auto text-white-500'>
					&copy; {new Date().getUTCFullYear()} Pokemon. All rights reserved
				</p>
			</div>
			<p className='my-10 text-center text-white-500'>
				Made with 💖 by
				<a
					href='#'
					target='_blank'
					rel='noopener noreferrer'
					className='cursor-pointer text-white-600'
				>
					{" "}Pokemon
				</a>
			</p>
		</footer>
	);
};

export default Footer;
