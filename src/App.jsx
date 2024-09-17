import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import WorkExperience from "./sections/WorkExperience";

function App() {
	return (
		<main className='mx-auto max-w-7xl'>
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Testimonials />
			<WorkExperience />
			<Contact />
		</main>
	);
}

export default App;
