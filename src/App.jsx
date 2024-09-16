import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";

function App() {
	return (
		<main className='mx-auto max-w-7xl'>
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Testimonials />
		</main>
	);
}

export default App;
