import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Tours from '../Tours/Tours';

const Home = () => {
	return (
		<div className='space-y-20'>
			<Banner />
			<Tours />
			<Footer />
		</div>
	);
};

export default Home;
