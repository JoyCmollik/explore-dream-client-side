import React from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Divider, Rating } from '@mui/material';

const TourInformation = ({ tour = {} }) => {
	const {
		tour_title,
		tour_price,
		tour_img,
		tour_banner,
		tour_description,
		tour_short_description,
		tour_country,
		tour_age_limit,
		tour_type,
		tour_return_location,
		tour_photo_collection,
		tour_departure_time,
		tour_return_time,
		tour_service_included,
		tour_service_notIncluded,
	} = tour;

	const headingInfo = [
		{
			icon: <AccessTimeFilledIcon sx={{ fontSize: '18px' }} />,
			info: '10 Days 9 Nights',
		},
		{
			icon: <GroupIcon sx={{ fontSize: '18px' }} />,
			info: tour_age_limit,
		},
		{
			icon: <PublicIcon sx={{ fontSize: '18px' }} />,
			info: tour_country,
		},
		{
			icon: <TravelExploreIcon sx={{ fontSize: '18px' }} />,
			info: tour_type,
		},
	];

	return (
		<div className='text-sm space-y-10'>
			{/* heading */}
			<div className='flex justify-between'>
				<div className='space-y-2'>
					<h2 className='text-3xl'>{tour_title}</h2>
					<div className='flex flex-wrap'>
						{headingInfo.map(({ icon, info }, index) => (
							<p key={index} className='text-gray-400 mb-2 mr-5'>
								<span className='text-primary mr-1'>
									{icon}
								</span>
								{info}
							</p>
						))}
					</div>
				</div>
				<h4 className='text-3xl'>
					${tour_price}{' '}
					<span className='text-gray-400 text-base'>
						/ per person
					</span>
				</h4>
			</div>
			{/* Description */}
			<p className='text-gray-500 tracking-wider leading-7'>
				{tour_description}
			</p>
			{/* Rating */}
			<div className='flex items-center'>
				<Rating
					name='half-rating-read'
					defaultValue={4.5}
					precision={0.5}
					readOnly
				/>
				<span className='text-gray-400 ml-2'>(2 Reviews)</span>
			</div>
			{/* listed info */}
			<div>
				<Divider />
				<div className='py-4 flex justify-between'>
					<h2 className='text-xl font-medium'>
						Departure/Return Location
					</h2>
					<p className='text-gray-500'>{tour_return_location}</p>
				</div>
				<Divider />

				<div className='py-4 flex justify-between'>
					<h2 className='text-xl font-medium'>Departure Time</h2>
					<p className='text-gray-500'>
						Please arrive by 19 minutes early for a departure at{' '}
						{tour_departure_time}
					</p>
				</div>
				<Divider />

				<div className='py-4 flex justify-between'>
					<h2 className='text-xl font-medium'>Return Time</h2>
					<p className='text-gray-500'>
						Approximately {tour_return_time}
					</p>
				</div>
				<Divider />

				<div className='py-4 flex justify-between'>
					<h2 className='text-xl font-medium'>Included</h2>
					<p className='text-gray-500'>
						104-100, Babar Rd Fire Brigade Lane, Delhi , India
					</p>
				</div>
				<Divider />

				<div className='py-4 flex justify-between'>
					<h2 className='text-xl font-medium'>Not Included</h2>
					<p className='text-gray-500'>
						104-100, Babar Rd Fire Brigade Lane, Delhi , India
					</p>
				</div>
				<Divider />
			</div>
		</div>
	);
};

export default TourInformation;
