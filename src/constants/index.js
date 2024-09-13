export const navLinks = [
	{
		id: 1,
		name: "Home",
		href: "#home",
	},
	{
		id: 2,
		name: "About",
		href: "#about",
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
				: [1, -6.5, 0],
		deskRotation: [0.25, -3.14, 0],
	};
};
