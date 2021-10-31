import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import googleIcon from '../../Images/google.svg';

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
				const { uid, displayName, email, photoURL } = result.user;
				setUser({ uid, displayName, email, photoURL });
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
				<div
					className='w-full p-10 bg-light rounded-lg shadow-lg'
					style={{ maxWidth: '400px' }}
				>
					{!user ? (
						<button
							onClick={googleSignIn}
							disabled={isLoading}
							className='text-dark border border-dark w-full px-2 py-4 rounded-lg flex justify-between items-center hover:bg-dark hover:text-white transition duration-100'
						>
							<img className='w-8' src={googleIcon} alt='' />{' '}
							<span className='flex-grow mx-auto text-xl font-medium uppercase'>
								sign in using google
							</span>
						</button>
					) : (
						<button
							onClick={handleSignOut}
							disabled={isLoading}
							className='text-dark border border-dark w-full px-2 py-4 rounded-lg hover:bg-dark hover:text-white transition duration-100'
						>
							sign out
						</button>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
