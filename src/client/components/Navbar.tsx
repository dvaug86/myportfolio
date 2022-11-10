import * as React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar: React.FC<NavbarProps> = (props) => { //learn strongtyping props and come up with an opinion
    return (
        <nav className=" nav justify-content-center bg-light  shadow p-3 mb-5 ">
            <NavLink className={({ isActive }) => isActive ? 'text-primary fw-bold py-2 mx-5' : 'text-primary fw-light py-2 mx-5' } end to='/'> Home </NavLink> 
            <NavLink className={({ isActive }) => isActive ? 'text-primary fw-bold py-2 mx-5' : 'text-primary fw-light py-2 mx-5' } to='/portfolio'> Portfolio </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-primary fw-bold py-2 mx-5' : 'text-primary fw-light py-2 mx-5' } to='/resume'> Resume</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-primary fw-bold py-2 mx-5' : 'text-primary fw-light py-2 mx-5' } to='/contact'> Contact Me! </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-primary fw-bold py-2 mx-5' : 'text-primary fw-light py-2 mx-5' } to='/admin'> Admin </NavLink>

        </nav>
    );
};

interface NavbarProps { }


export default Navbar;