import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className='flex justify-between items-center text-white py-3'>
			<div className='logo'>
				<h2 className='text-2xl'>
					explore
					<span className='text-primary'>Dream</span>
				</h2>
			</div>
			<div className=''>
				<NavLink
					activeClassName='text-primary'
					className='px-4 py-2 font-medium'
					to='/home'
				>
					Home
				</NavLink>
				<NavLink
					activeClassName='text-primary'
					className='px-4 py-2 font-medium'
					to='/bookings'
				>
					My Bookings
				</NavLink>
				<NavLink
					activeClassName='text-primary'
					className='px-4 py-2 font-medium'
					to='/manage-bookings'
				>
					Manage All Bookings
				</NavLink>
				<NavLink
					activeClassName='text-primary'
					className='px-4 py-2 font-medium'
					to='/add-service'
				>
					Add new Service
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
