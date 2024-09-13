import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import WorkDesk from "../components/WorkDesk";

const Hero = () => {
	const leva = useControls("WorkDesk", {
		scale: { value: 0, max: 10, min: -10 },
		rotationX: { value: 0, max: 10, min: -10 },
		rotationY: { value: 0, max: 10, min: -10 },
		rotationZ: { value: 0, max: 10, min: -10 },
		positionX: { value: 0, max: 10, min: -10 },
		positionY: { value: 0, max: 10, min: -10 },
		positionZ: { value: 0, max: 10, min: -10 },
	});

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
							// scale={0.1}
							// position={[1.5, -8, 2]}
							// rotation={[0.25, -3.14, 0]}
							scale={leva.scale}
							position={[
								leva.positionX,
								leva.positionY,
								leva.positionZ,
							]}
							rotation={[
								leva.rotationX,
								leva.rotationY,
								leva.rotationZ,
							]}
						/>
						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
				<Leva />
			</div>
		</section>
	);
};

export default Hero;
