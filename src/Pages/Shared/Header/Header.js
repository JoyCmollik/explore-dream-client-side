import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = ({ mode }) => {
	const { user } = useAuth();

	const privateLinksList = [
		{ to: '/bookings', text: 'My Bookings' },
		{ to: '/manage-bookings', text: 'Manage All Bookings' },
		{ to: '/add-tour', text: 'Add New Tour' },
	];

	return (
		<div className={mode === 'dark' ? 'bg-dark' : ''}>
			<header className='container mx-auto flex justify-between items-center text-white py-3 '>
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
					{user &&
						privateLinksList.map(({ to, text }, index) => (
							<NavLink
								key={index}
								activeClassName='text-primary'
								className='px-4 py-2 font-medium'
								to={to}
							>
								{text}
							</NavLink>
						))}
				</div>
			</header>
		</div>
	);
};

export default Header;
