import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import WorkDesk from "../components/WorkDesk";

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
			<div className='absolute inset-0 size-full'>
				<Canvas className='size-full'>
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 30]} />
						<WorkDesk
							scale={0.07}
							position={[0, -5, 0]}
							rotation={[0.1, Math.PI, 0]}
						/>
						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
			</div>
		</section>
	);
};

export default Hero;
