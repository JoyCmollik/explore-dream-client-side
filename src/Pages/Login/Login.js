import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Login = () => {
	return (
		<div className='h-screen flex flex-col'>
			<div className='bg-dark text-center py-4'>
				<NavLink
					className='rounded-lg px-4 py-2 hover:bg-gray-800'
					to='/home'
				>
					Go Back To Home
				</NavLink>
			</div>
			<div className='flex-grow flex justify-center items-center'>
				<button className='text-dark bg-primary p-4 rounded'>
					sign in using google
				</button>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
