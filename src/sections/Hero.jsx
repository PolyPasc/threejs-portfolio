import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "../components/CanvasLoader";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/ui/Button";
import WorkDesk from "../components/WorkDesk";
import { calculateSizes } from "../constants";

const Hero = () => {
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });

	const size = calculateSizes(isSmall, isMobile);

	return (
		<section
			id='home'
			aria-label='Hero'
			className='relative flex min-h-screen w-full flex-col'
		>
			<div className='c-space mx-auto mt-20 flex w-full flex-col gap-3 sm:mt-36'>
				<h1 className='text-center font-generalsans text-2xl font-medium text-white sm:text-3xl'>
					Hi, I am Pokemon <span className='waving-hand'>👋</span>
				</h1>
				<p className='hero_tag text-gray_gradient'>
					Building Products and Experiences
				</p>
			</div>
			<div className='absolute inset-0 size-full'>
				<Canvas
					className='size-full'
					fallback={<div>Sorry, no WebGL supported!</div>}
				>
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 20]} />
						<HeroCamera isMobile={isMobile}>
							<WorkDesk
								scale={size.deskScale}
								position={size.deskPosition}
								rotation={size.deskRotation}
							/>
						</HeroCamera>
						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
			</div>
			<div className='c-space absolute inset-x-0 bottom-7 z-10 w-full'>
				<a href='#about' className='w-fit'>
					<Button
						text='Lets work together'
						isBeam
						containerClass='w-full sm:w-fit sm:min-w-96'
					/>
				</a>
			</div>
		</section>
	);
};

export default Hero;
