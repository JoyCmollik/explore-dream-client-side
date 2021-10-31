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
			<div className='px-1 lg:px-0 space-y-20'>
				<Introduction />
				<Tours />
				<PlacesOverview />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
