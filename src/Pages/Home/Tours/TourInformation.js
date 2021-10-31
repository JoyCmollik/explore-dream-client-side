import React from 'react';
import Rating from '@mui/material/Rating';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';

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
		tour_package,
	} = tour;

	const headingInfo = [
		{
			icon: <AccessTimeFilledIcon sx={{ fontSize: '18px' }} />,
			info: tour_package,
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
		<div className='text-sm space-y-10 p-1 lg-p-0'>
			{/* heading */}
			<div className='md:flex justify-between space-y-4'>
				<div className='space-y-2'>
					<h2 className='text-3xl'>{tour_title}</h2>
					<div className='flex flex-wrap items-center'>
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

			<p className='text-gray-500 lg:tracking-wider lg:leading-7'>
				{tour_description}
			</p>
			{/* Rating */}
			<div className='flex items-center'>
				<Rating
					name='half-rating-read'
					defaultValue={0}
					precision={0.5}
					readOnly
				/>
				<span className='text-gray-400 ml-2'>(Not Reviewed)</span>
			</div>
			{/* listed info */}
			<div className=''>
				<div className='py-4 md:flex justify-between border-b border-t'>
					<h2 className='text-xl font-medium'>
						Departure/Return Location
					</h2>
					<p className='text-gray-500 text-xs md:text-sm'>
						{tour_return_location}
					</p>
				</div>

				<div className='py-4 md:flex justify-between border-b'>
					<h2 className='text-xl font-medium'>Departure Time</h2>
					<p className='text-gray-500 text-xs md:text-sm'>
						Please arrive by 19 minutes early for a departure at{' '}
						{tour_departure_time}
					</p>
				</div>

				<div className='py-4 md:flex justify-between border-b'>
					<h2 className='text-xl font-medium'>Return Time</h2>
					<p className='text-gray-500 text-xs md:text-sm'>
						Approximately {tour_return_time}
					</p>
				</div>

				<div className='py-4 md:flex justify-between border-b'>
					<h2 className='text-xl font-medium'>Included</h2>
					<div className='text-gray-500 text-xs md:text-sm flex items-start flex-wrap justify-around'>
						{tour_service_included
							? tour_service_included.map((service, index) => (
									<p key={index} className='mr-3'>
										<DoneAllIcon
											fontSize='small'
											sx={{ color: '#FFCC05' }}
										/>{' '}
										{service}
									</p>
							  ))
							: 'NA'}
					</div>
				</div>

				<div className='py-4 md:flex justify-between border-b'>
					<h2 className='text-xl font-medium'>Not Included</h2>
					<div className='text-gray-500 text-xs md:text-sm flex items-start flex-wrap justify-around'>
						{tour_service_notIncluded
							? tour_service_notIncluded.map((service, index) => (
									<p key={index} className='mr-3'>
										<RemoveDoneIcon
											fontSize='small'
											sx={{ color: 'red' }}
										/>{' '}
										{service}
									</p>
							  ))
							: 'NA'}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TourInformation;
