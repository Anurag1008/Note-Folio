import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElement";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/Branches" activeStyle>
						Branches
					</NavLink>
					<NavLink to="/Semester" activeStyle>
						Semester
					</NavLink>
					<NavLink to="/Teacher" activeStyle>
						Teacher
					</NavLink>
					<NavLink to="/Note" activeStyle>
						Note
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
