import { Avatar, Chip } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MobileNav from './MobileNav';

const Header = ({ mode }) => {
	const { user, handleSignOut } = useAuth();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const privateLinksList = [
		{ to: '/bookings', text: 'My Bookings' },
		{ to: '/manage-bookings', text: 'Manage All Bookings' },
		{ to: '/add-tour', text: 'Add New Tour' },
	];

	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={mode === 'dark' ? 'bg-dark' : ''}>
			<header className='hidden container mx-auto lg:flex justify-between items-center text-white py-3 '>
				<div className='logo'>
					<h2 className='text-2xl'>
						explore
						<span className='text-primary'>Dream</span>
					</h2>
				</div>
				<div className='hidden lg:block'>
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

					{user && (
						<div className='inline'>
							<Chip
								onClick={handleClick}
								size='large'
								avatar={
									<Avatar alt='user' src={user?.photoURL} />
								}
								label={user?.displayName.split(' ', 1)}
								variant={mode && 'outlined'}
								sx={{ color: 'white' }}
							/>
							<Menu
								id='basic-menu'
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
							>
								<MenuItem
									onClose={handleClose}
									onClick={handleSignOut}
								>
									Logout
								</MenuItem>
							</Menu>
						</div>
					)}
				</div>
			</header>
			<div className='lg:hidden'>
				<MobileNav />
			</div>
		</div>
	);
};

export default Header;
