const Navbar = () => {
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
						className='block text-neutral-400 hover:text-white focus:outline-none sm:hidden'
						aria-label='Toggle Menu'
					>
						<img
							src={"/assets/menu.svg"}
							width={24}
							height={24}
							alt='toggle menu'
						/>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
