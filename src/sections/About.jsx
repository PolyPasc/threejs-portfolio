const About = () => {
	return (
		<section aria-label='About' className='c-space my-20'>
			<div className='xl:grid-row-6 grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
				<div className='col-span-1 xl:row-span-3'>
					<div className='grid-container'>
						<img
							src='/assets/grid1.png'
							alt='grid-1'
							className='h-fit w-full object-contain sm:h-[276px]'
						/>
						<div className=''>
							<p className='grid-headText'>Hi, I'm Pokemon</p>
							<p className='grid-subText'>
								With 37 years of experience, I have honed my skills in Frontend
								and Backend development, with a focus in animated websites.
							</p>
						</div>
					</div>
				</div>
				<div className='col-span-1 xl:row-span-3'>
					<div className='grid-container'>
						<img
							src='/assets/grid2.png'
							alt='grid-2'
							className='h-fit w-full object-contain sm:h-[276px]'
						/>
						<div className=''>
							<p className='grid-headText'>Tech Stack</p>
							<p className='grid-subText'>
								I specialize in JavaScript/TypeScript with a focus on React and
								Next.js ecosystems.
							</p>
						</div>
					</div>
				</div>
				<div className='col-span-1 xl:row-span-4'>
					<div className='grid-container'></div>
				</div>
			</div>
		</section>
	);
};

export default About;
