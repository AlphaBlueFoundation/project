import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
const Nav = () => {
	return (
		<nav className='flex justify-between bg-slate-700 text-white items-center px-[20px] py-[10px]'>
			<img src={logo} alt='' className='w-[40px] h-[40px]' />
			<ul className='flex gap-x-[30px]'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/quote'>Quote</Link>
				</li>
				<li>
					<Link to='/blog'>Blog</Link>
				</li>
				<li>
					<Link to={'/services'}>Services</Link>
				</li>
				<li>
					<Link to={'/contact'}>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
