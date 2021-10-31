import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Introduction from '../Introduction/Introduction';
import PlacesOverview from '../PlacesOverview/PlacesOverview';
import Tours from '../Tours/Tours';

const Home = () => {
	return (
		<div className='space-y-20'>
			<Banner />
			<Introduction />
			<Tours />
			<PlacesOverview />
			<Footer />
		</div>
	);
};

export default Home;
