import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAxios from '../../../hooks/useAxios';
import SectionBanner from '../../Shared/SectionBanner';
import BookingTour from './BookingTour';

const TourDetail = () => {
	const { id } = useParams();
	const [tour, setTour] = useState({});
	const { client } = useAxios();

	useEffect(() => {
		client.get(`/tourdetail/${id}`).then((response) => {
			setTour(response.data);
		});
	}, []);

	return (
		<div>
			<SectionBanner title='Tour Detail' />
			<div className='container mx-auto -mt-10'>
				<div className='w-full bg-light h-10'></div>
				<div className='pt-20 pb-10 grid grid-cols-12 gap-10'>
					<div className='col-span-9'>
						{tour && <img src={tour?.img_url} alt='place' />}
					</div>
					<div className='col-span-3 bg-light'>
						{tour && <BookingTour tour={tour} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TourDetail;
