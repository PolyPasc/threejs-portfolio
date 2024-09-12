import { navLinks } from "../constants";

const NavItems = () => {
	return (
		<ul className='nav-ul'>
			{navLinks.map(({ name, href, id }) => (
				<li key={id} className='navItem'>
					<a href={href} className='navItem-link'>
						{name}
					</a>
				</li>
			))}
		</ul>
	);
};

export default NavItems;
