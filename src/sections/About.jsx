import Globe from "react-globe.gl";
import Button from "../components/ui/Button";

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
					<div className='grid-container'>
						<div className='flex h-fit w-full items-center justify-center rounded-3xl sm:h-[326px]'>
							<Globe
								height={326}
								width={326}
								backgroundColor='rgba(0,0,0,0)'
								showAtmosphere
								showGraticules
								globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
							/>
						</div>
						<div className=''>
							<p className='grid-headText'>
								I work remotely across most timezones.
							</p>
							<p className='grid-subText'>
								I'm based in Eygpt, with remote work available.
							</p>
							<a href='#contact'>
								<Button
									text='Contact Me'
									isBeam
									containerClass={"mt-10 w-full"}
								/>
							</a>
						</div>
					</div>
				</div>
				<div className='xl:col-span-2 xl:row-span-3'>
					<div className='grid-container'>
						<img
							src='/assets/grid3.png'
							alt='grid-3'
							className='h-fit w-full object-contain sm:h-[266px]'
						/>
						<div className=''>
							<p className='grid-headText'>My passion for Coding</p>
							<p className='grid-subText'>
								I love solving problems and building things through code. Coding
								isn't my profession - it is my passion.
							</p>
						</div>
					</div>
				</div>
				<div className='xl:col-span-1 xl:row-span-2'>
					<div className='grid-container'>
						<img
							src='/assets/grid4.png'
							alt='grid-4'
							className='h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[126px]'
						/>
						<div className='space-y-2'>
							<p className='grid-subText text-center'>Contact me</p>
							<div className='copy-container'>
								<img src='/assets/copy.svg' alt='Copy' title='Copy' />
								<p className='text-gray_gradient font-medium md:text-xl lg:text-2xl'>
									pokemon@pokeworld.com
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
