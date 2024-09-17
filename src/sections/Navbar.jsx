import { useState } from "react";
import NavItems from "../components/NavItems";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuToggle = () => setIsOpen((prevIsOpen) => !prevIsOpen);

	return (
		<header className='fixed inset-x-0 top-0 z-10 bg-black/90'>
			<div className='mx-auto max-w-7xl'>
				<div className='c-space mx-auto flex items-center justify-between py-5'>
					<a
						href='/'
						target='_self'
						rel='noopener noreferrer'
						className='text-xl font-bold text-neutral-400 transition-colors hover:text-white'
					>
						Pokemon
					</a>
					<button
						onClick={handleMenuToggle}
						className='block text-neutral-400 hover:text-white focus:outline-none sm:hidden'
						aria-label='Toggle Menu'
					>
						<img
							src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
							width={24}
							height={24}
							alt='toggle menu'
						/>
					</button>
					<nav className='hidden sm:block'>
						<NavItems />
					</nav>
				</div>
				<div className={`mobile-nav ${isOpen ? "max-h-dvh" : "max-h-0"}`}>
					<nav className='p-5'>
						<NavItems onNavItemClick={() => setIsOpen(false)} />
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
