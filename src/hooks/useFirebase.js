import { useState, useEffect } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const auth = getAuth();

	const handleGoogleSignIn = () => {
		return signInWithPopup(auth, googleProvider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(user);
				const { uid, displayName, email, photoURL } = user;
				setUser({ uid, displayName, email, photoURL });
			} else {
				setUser(null);
			}
			setIsLoading(false);
		});

		return () => unsubscribe;
	}, []);

	const handleSignOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				console.log('signed out');
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return {
		user,
		setUser,
		error,
		setError,
		isLoading,
		setIsLoading,
		handleGoogleSignIn,
		handleSignOut,
	};
};

export default useFirebase;
