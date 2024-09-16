import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";
import ProjectDemoComputer from "../components/ProjectDemoComputer";
import { myProjects } from "../constants";

const Projects = () => {
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const currentProject = myProjects[selectedProjectIndex];
	const projectCount = myProjects.length;

	const handleNavigation = (direction) => {
		setSelectedProjectIndex((prevIndex) => {
			if (direction === "previous") {
				return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
			} else if (direction === "next") {
				return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
			}
		});
	};

	return (
		<section aria-label='Projects' className='c-space my-20'>
			<h2 className='head-text'>My Work</h2>
			<div className='mt-12 grid w-full grid-cols-1 gap-5 lg:grid-cols-2'>
				<div className='relative flex flex-col gap-5 px-5 py-10 shadow-2xl shadow-black-200 sm:p-10'>
					<div className='absolute right-0 top-0'>
						<img
							src={currentProject.spotlight}
							alt=''
							className='h-96 w-full rounded-xl object-cover'
						/>
					</div>
					<div
						className='w-fit rounded-lg p-3 backdrop-blur-3xl backdrop-filter'
						style={currentProject.logoStyle}
					>
						<img src={currentProject.logo} className='size-10 shadow-sm' />
					</div>
					<div className='my-5 flex flex-col gap-5 text-white-600'>
						<h3 className='text-2xl font-semibold text-white'>
							{currentProject.title}
						</h3>
						<p>{currentProject.desc}</p>
						<p>{currentProject.subdesc}</p>
					</div>
					<div className='flex flex-wrap items-center justify-between gap-5'>
						<div className='flex items-center gap-3'>
							{currentProject.tags.map((tag, index) => (
								<div key={index} className='tech-logo'>
									<img src={tag.path} alt={tag.name} title={tag.name} />
								</div>
							))}
						</div>
						<a
							href={currentProject.href}
							target='_blank'
							rel='noopener noreferrer'
							className='flex cursor-pointer items-center gap-2 text-white-600'
						>
							<p>Check Live Site</p>
							<img src='/assets/arrow-up.png' className='size-3' alt='arrow' />
						</a>
					</div>
					<div className='mt-7 flex items-center justify-between'>
						<button
							className='arrow-btn'
							onClick={() => handleNavigation("previous")}
						>
							<img src='/assets/left-arrow.png' className='size-4' alt='left' />
						</button>
						<button
							className='arrow-btn'
							onClick={() => handleNavigation("next")}
						>
							<img
								src='/assets/right-arrow.png'
								className='size-4'
								alt='right'
							/>
						</button>
					</div>
				</div>
				<div className='h-96 rounded-lg border-black-300 bg-black-200 md:h-full'>
					<Canvas fallback={<div>Sorry no WebGL supported!</div>}>
						<ambientLight intensity={4} />
						<directionalLight position={[10, 10, 5]} />
						<Center>
							<Suspense fallback={<CanvasLoader />}>
								<group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
									<ProjectDemoComputer texture={currentProject.texture} />
								</group>
							</Suspense>
						</Center>
						<OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
					</Canvas>
				</div>
			</div>
		</section>
	);
};

export default Projects;
