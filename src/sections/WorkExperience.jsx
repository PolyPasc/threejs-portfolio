import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";
import { workExperiences } from "../constants";

const WorkExperience = () => {
	return (
		<section aria-label='Work Experience' className='c-space my-20'>
			<div className='w-full text-white-600'>
				<h2 className='head-text'>My Work Experience</h2>
				<div className='work-container'>
					<div className='work-canvas min-h-64'>
						<Canvas fallback={<div>Sorry, no WebGL supported!</div>}>
							<Suspense fallback={<CanvasLoader />}>
								<Developer position-y={-3} rotation={[0.045, 0, 0]} scale={3} />
							</Suspense>
							<ambientLight intensity={7} />
							<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
							<directionalLight position={[10, 10, 10]} intensity={1} />
							<OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
						</Canvas>
					</div>
					<div className='work-content'>
						<div className='px-2.5 py-5 sm:px-5 sm:py-10'>
							{workExperiences.map(
								({ id, icon, name, pos, title, duration, animation }) => (
									<div className='work-content_container group' key={id}>
										<div className='flex h-full flex-col items-center justify-start py-2'>
											<div className='work-content_logo'>
												<img src={icon} alt='logo' className='size-full' />
											</div>
											<div className='work-content_bar' />
										</div>
										<div className='px-2.5 py-5 sm:p-5'>
											<p className='font-bold text-white-800'>{name}</p>
											<p className='mb-5 text-sm'>
												{pos} -- {duration}
											</p>
											<p className='transition-colors duration-300 ease-in-out group-hover:text-white'>
												{title}
											</p>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkExperience;
