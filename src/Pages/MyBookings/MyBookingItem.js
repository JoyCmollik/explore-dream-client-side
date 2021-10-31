import React from 'react';

const MyBookingItem = ({ booking, handleCancelBooking }) => {
	const {
		_id,
		email,
		tour_id,
		tour_title,
		total_price,
		tour_img,
		number_tickets,
		booking_status,
		user_departure_date,
		user_departure_time,
	} = booking;

	const bookingInfo = [
		{ key: 'Tour Selected:', value: tour_title },
		{ key: 'Booking ID:', value: tour_id },
		{ key: 'Departure Date:', value: user_departure_date },
		{ key: 'Departure Time:', value: user_departure_time },
		{ key: 'Contact email:', value: email },
		{ key: 'Number of Tickets::', value: number_tickets },
		{ key: 'Total Price:', value: `$${total_price}` },
	];

	return (
		<div className='grid grid-cols-12 gap-4 border rounded-lg overflow-hidden shadow-lg'>
			<div className='col-span-12 lg:col-span-4'>
				<img
					className='object-cover w-full h-80 lg:h-full'
					src={tour_img}
					alt='imgs'
				/>
			</div>
			<div className='col-span-12 lg:col-span-8 space-y-2 p-4 rounded-lg'>
				{bookingInfo.map(({ key, value }, index) => (
					<div className='text-base md:text-lg font-medium md:flex justify-between items-center border-b mt-10'>
						<p>{key}</p>
						<p className='text-sm md:text-base text-sub font-normal'>
							{value}
						</p>
					</div>
				))}
				<button
					onClick={() => handleCancelBooking(_id)}
					className='px-4 py-2 bg-red-500 text-white rounded-lg'
				>
					Cancel Booking
				</button>
			</div>
		</div>
	);
};

export default MyBookingItem;
