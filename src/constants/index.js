export const navLinks = [
	{
		id: 0,
		name: "Home",
		href: "#home",
	},
	{
		id: 1,
		name: "About",
		href: "#about",
	},
	{
		id: 2,
		name: "Projects",
		href: "#projects",
	},
	{
		id: 3,
		name: "Work",
		href: "#work",
	},
	{
		id: 4,
		name: "Contact",
		href: "#contact",
	},
];

export const calculateSizes = (isSmall, isMobile) => {
	return {
		deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.07,
		deskPosition: isSmall
			? [0.7, -5, 0]
			: isMobile
				? [0.8, -5.4, 0]
				: [1, -6.5, -2.2],
		deskRotation: [0.25, -3.14, 0],
	};
};

export const myProjects = [
	{
		title: "Podmastr 3000 -  Podcast Platform",
		desc: "Podmastr 3000 is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced features, it allows creators to generate diverse type of content.",
		subdesc:
			"Built as a unique Software-as-a-Service app with React.js, Tailwind CSS and Framer Motion, Podmastr 3000 is designed for optimal performance and scalability.",
		href: "https://www.github.com/",
		texture: "/textures/project/project1.mp4",
		logo: "/assets/project-logo1.png",
		logoStyle: {
			backgroundColor: "#2A1816",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "Framer Motion",
				path: "/assets/framer.png",
			},
		],
	},
	{
		title: "UrDoc - Real-Time Online Docs",
		desc: "UrDoc is a powerful collaborative app that elevates the capabilities of real-time document editing.It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
		subdesc:
			"With UrDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
		href: "https://www.github.com/",
		texture: "/textures/project/project2.mp4",
		logo: "/assets/project-logo2.png",
		logoStyle: {
			backgroundColor: "#13202F",
			border: "0.2px solid #17293E",
			boxShadow: "0px 0px 60px 0px #2F6DB54D",
		},
		spotlight: "/assets/spotlight2.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "Framer Motion",
				path: "/assets/framer.png",
			},
		],
	},
	{
		title: "MediFlow - Health Management System",
		desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
		subdesc:
			"With a focus on efficiency, MediFlow integrantes complex forms and SMS notifications, by using React.js that enhance operational workflows.",
		href: "https://www.github.com/",
		texture: "/textures/project/project3.mp4",
		logo: "/assets/project-logo3.png",
		logoStyle: {
			backgroundColor: "#60f5a1",
			background:
				"linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
			border: "0.2px solid rgba(208, 213, 221, 1)",
			boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
		},
		spotlight: "/assets/spotlight3.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
			{
				id: 4,
				name: "Framer Motion",
				path: "/assets/framer.png",
			},
		],
	},
	{
		title: "Credable - Online Banking Platform",
		desc: "Credable is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
		subdesc:
			"Built with React.js, Credable ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
		href: "https://www.github.com/",
		texture: "/textures/project/project4.mp4",
		logo: "/assets/project-logo4.png",
		logoStyle: {
			backgroundColor: "#0E1F38",
			border: "0.2px solid #0E2D58",
			boxShadow: "0px 0px 60px 0px #2F67B64D",
		},
		spotlight: "/assets/spotlight4.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
		],
	},
	{
		title: "Incignia -  Photo Manipulation App",
		desc: "Incignia is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using technology. With features like image editing, a payments system, and a credits-based model.",
		subdesc:
			"Built with React.js and Tailwind CSS, Incignia combines cutting-edge technology with a user-centric approach.",
		href: "https://www.github.com/",
		texture: "/textures/project/project5.mp4",
		logo: "/assets/project-logo5.png",
		logoStyle: {
			backgroundColor: "#1C1A43",
			border: "0.2px solid #252262",
			boxShadow: "0px 0px 60px 0px #635BFF4D",
		},
		spotlight: "/assets/spotlight5.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "Tailwind CSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
		],
	},
];

export const clientReviews = [
	{
		id: 1,
		name: "Dwight Heroldson",
		position: "Marketing Director at AstroMedia",
		img: "assets/review1.png",
		review:
			"Working with Pokemon was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
	},
	{
		id: 2,
		name: "Abrahim D. Rogers",
		position: "Founder of TakkleAnalytics",
		img: "assets/review2.png",
		review:
			"Pokemon’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
	},
	{
		id: 3,
		name: "Richard Johanas",
		position: "Project Manager at MoxxelTech ",
		img: "assets/review3.png",
		review:
			"I can’t say enough good things about Pokemon. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
	},
	{
		id: 4,
		name: "Lewis W. Smith",
		position: "CEO of NightLight Enterprises",
		img: "assets/review4.png",
		review:
			"Pokemon was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
	},
];

export const workExperiences = [
	{
		id: 1,
		name: "Framer",
		pos: "Associate Web Developer",
		duration: "2021 - Present",
		title:
			"Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
		icon: "/assets/framer.svg",
	},
	{
		id: 2,
		name: "Figma",
		pos: "Junior Web Developer",
		duration: "2019 - 2021",
		title:
			"Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
		icon: "/assets/figma.svg",
	},
	{
		id: 3,
		name: "Notion",
		pos: "Web Developer Intern",
		duration: "2017 - 2019",
		title:
			"Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
		icon: "/assets/notion.svg",
	},
];

export const socials = [
	{
		id: 0,
		href: "https://github.com",
		src: "/assets/github.svg",
		name: "GitHub",
	},
	{
		id: 1,
		href: "https://twitter.com",
		src: "/assets/twitter.svg",
		name: "Twitter/x",
	},
	{
		id: 2,
		href: "https://linkedin.com",
		src: "/assets/linkedin.svg",
		name: "linkedIn",
	},
];
