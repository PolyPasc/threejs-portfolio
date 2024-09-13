const Hero = () => {
	return (
		<section
			aria-label='Hero'
			className='relative flex min-h-screen w-full flex-col'
		>
			<div className='c-space mx-auto mt-20 flex w-full flex-col gap-3 sm:mt-36'>
				<p className='text-center font-generalsans text-2xl font-medium text-white sm:text-3xl'>
					Hi, I am Pokemon <span className='waving-hand'>👋</span>
				</p>
				<p className='hero_tag text-gray_gradient'>
					Building Products and Experiences
				</p>
			</div>
			<div className='absolute inset-0 size-full'></div>
		</section>
	);
};

export default Hero;
