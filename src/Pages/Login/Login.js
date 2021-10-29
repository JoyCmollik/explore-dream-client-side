import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';

const Login = () => {
	const {
		handleGoogleSignIn,
		isLoading,
		setIsLoading,
		user,
		setUser,
		error,
		setError,
		handleSignOut,
	} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirectURI = location?.state?.from?.pathname || '/home';

	const googleSignIn = () => {
		setIsLoading(true);
		handleGoogleSignIn()
			.then((result) => {
				setError('');
				const { displayName, email, photoURL } = result.user;
				setUser({ displayName, email, photoURL });
				history.push(redirectURI);
			})
			.catch((error) => {
				setError(error);
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

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
				{!user ? (
					<button
						onClick={googleSignIn}
						className='text-dark bg-primary p-4 rounded'
					>
						sign in using google
					</button>
				) : (
					<button
						onClick={handleSignOut}
						className='text-dark bg-primary p-4 rounded'
					>
						sign out
					</button>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default Login;
