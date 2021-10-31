import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import Slider from 'react-slick';
import Tour from './Tour';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Skeleton } from '@mui/material';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Tours = () => {
	const [tours, setTours] = useState();
	const { client } = useAxios();
	let slider;

	useEffect(() => {
		client.get('/tours').then((response) => {
			setTours(response.data);
		});
	}, []);

	const settings = {
		centerMode: true,
		infinite: true,
		slidesToShow: 3,
		speed: 500,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 786,
				settings: {
					centerMode: false,
					slidesToShow: 1,
				},
			},
		],
	};

	const TourSkeleton = () => {
		return (
			<Skeleton
				variant='rectangular'
				sx={{
					maxWidth: '800px',
					height: '500px',
					mr: 2,
					borderRadius: '25px',
				}}
			></Skeleton>
		);
	};

	return (
		<div className='text-dark space-y-10 overflow-hidden'>
			<div className='container mx-auto flex justify-between items-start'>
				<div className='space-y-1'>
					<h4 className='text-primary font-semibold'>POPULARLY</h4>
					<h2 className='heading'>Most Popular Tour Destinations</h2>
				</div>
				<div className='flex space-x-4'>
					<button
						className='carousel-prev'
						onClick={() => slider.slickPrev()}
					>
						<ArrowBackIosNewIcon fontSize='large' />
					</button>
					<button
						className='carousel-next'
						onClick={() => slider.slickNext()}
					>
						<ArrowForwardIosIcon fontSize='large' />
					</button>
				</div>
			</div>
			<Slider ref={(c) => (slider = c)} {...settings}>
				{tours
					? tours.map((tour) => <Tour key={tour._id} tour={tour} />)
					: [...Array(10).keys()].map((value) => (
							<TourSkeleton key={value} />
					  ))}
			</Slider>
		</div>
	);
};

export default Tours;
