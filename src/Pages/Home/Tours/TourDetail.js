import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';
import PrivateRoute from '../../Shared/PrivateRoute/PrivateRoute';
import SectionBanner from '../../Shared/SectionBanner';
import BookingTour from './BookingTour';
import TourGallery from './TourGallery';
import TourInformation from './TourInformation';

const TourDetail = () => {
	const { id } = useParams();
	const [tour, setTour] = useState({});
	const { client } = useAxios();
	const { path, url } = useRouteMatch();

	useEffect(() => {
		client.get(`/tourdetail/${id}`).then((response) => {
			setTour(response.data);
		});
	}, []);

	// local component
	const navLinks = [
		{ to: `${url}`, text: 'INFORMATION' },
		{ to: `${url}/location`, text: 'LOCATION' },
		{ to: `${url}/gallery`, text: 'GALLERY' },
		{ to: `${url}/reviews`, text: 'REVIEWS' },
	];

	const TopNavbar = () => (
		<div className='bg-light grid grid-cols-2 lg:grid-cols-4'>
			{navLinks.map(({ to, text }, index) => (
				<NavLink
					key={index}
					to={to}
					className='text-sm px-2 py-2 border'
				>
					{text}
				</NavLink>
			))}
		</div>
	);

	return (
		<div className='overflow-hidden'>
			<SectionBanner
				title={tour?.tour_title}
				short_title={tour?.tour_short_description}
				banner_img={tour?.tour_banner}
			/>
			<div className='container mx-auto bg-white text-dark -mt-20'>
				<TopNavbar />
				<div className='pt-20 pb-10 grid grid-cols-12 gap-y-10 lg:gap-x-10'>
					<div className='col-span-12 lg:col-span-9'>
						<PrivateRoute exact path={`${path}`}>
							<TourInformation tour={tour} />
						</PrivateRoute>
						<PrivateRoute
							exact
							path={`${path}/location`}
						></PrivateRoute>
						<PrivateRoute exact path={`${path}/gallery`}>
							<TourGallery
								tourPhotoCollection={
									tour?.tour_photo_collection
								}
							/>
						</PrivateRoute>
						<PrivateRoute
							exact
							path={`${path}/reviews`}
						></PrivateRoute>
					</div>
					{/* Booking */}
					<div className='col-span-12 lg:col-span-3 bg-light'>
						{tour && <BookingTour tour={tour} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TourDetail;
