import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from '../../../hooks/useAuth';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

const MobileNav = () => {
	const [state, setState] = React.useState(false);
	const { user, handleSignOut } = useAuth();

	const toggleDrawer = (open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState(open);
	};

	const privateLinksList = [
		{
			to: '/bookings',
			text: 'My Bookings',
			icon: <ConfirmationNumberIcon />,
		},
		{
			to: '/manage-bookings',
			text: 'Manage All Bookings',
			icon: <AdminPanelSettingsIcon />,
		},
		{ to: '/add-tour', text: 'Add New Tour', icon: <AddBoxIcon /> },
	];

	const list = () => (
		<div
			className='bg-dark h-full text-white px-2 py-5 space-y-5'
			role='presentation'
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<button
				onClick={toggleDrawer(false)}
				className='block p-2 bg-red-100 text-red-800 rounded-lg mb-5 ml-auto'
			>
				<CloseIcon color='error' />
			</button>

			<div className='grid grid-cols-1 gap-2'>
				<NavLink
					className='px-5 py-2 rounded-lg flex flex-col justify-between items-center bg-gray-800'
					to='/home'
				>
					<span className='text-primary'>
						<HomeIcon />
					</span>
					<span className='text-white'>Home</span>
				</NavLink>
				{user &&
					privateLinksList.map(({ to, text, icon }, index) => (
						<NavLink
							key={index}
							activeClassName='border border-primary'
							className='px-5 py-2 rounded-lg flex flex-col justify-between items-center bg-gray-800'
							to={to}
						>
							<span className='text-primary'>{icon}</span>
							<span className='text-white'>{text}</span>
						</NavLink>
					))}
			</div>
			<Divider sx={{ background: '#FFFCFF' }} />
			<div className='grid grid-cols-1 gap-2'>
				{!user ? (
					<NavLink
						className='px-5 py-2 rounded-lg flex flex-col justify-between items-center bg-gray-800'
						to='/login'
					>
						<span className='text-primary'>
							<LoginIcon />
						</span>
						<span className='text-white'>Login</span>
					</NavLink>
				) : (
					<button
						onClick={handleSignOut}
						className='px-5 py-2 rounded-lg flex flex-col justify-between items-center bg-gray-800'
						to='/login'
					>
						<span className='text-primary'>
							<LogoutIcon />
						</span>
						<span className='text-white'>Logout</span>
					</button>
				)}
			</div>
		</div>
	);

	return (
		<div className='bg-dark p-4 flex justify-between items-center'>
			<div className=''>
				<button
					onClick={toggleDrawer(true)}
					className='px-2 py-1 rounded text-primary border-2 border-primary'
				>
					<MenuIcon />
				</button>
				<SwipeableDrawer
					open={state}
					onClose={toggleDrawer(false)}
					onOpen={toggleDrawer(true)}
				>
					{list()}
				</SwipeableDrawer>
			</div>
			<div className='logo'>
				<h2 className='text-2xl'>
					explore
					<span className='text-primary'>Dream</span>
				</h2>
			</div>
		</div>
	);
};

export default MobileNav;
