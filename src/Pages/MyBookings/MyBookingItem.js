import React from 'react';

const MyBookingItem = ({ booking, handleCancelBooking }) => {
	const { _id, email, tour_id, total_price, tour_img } = booking;

	return (
		<div className='grid grid-cols-12 gap-4 border'>
			<div className='col-span-3'>
				<img className='object-contain' src={tour_img} alt='imgs' />
			</div>
			<div className='col-span-9 space-y-2 p-4 rounded-lg'>
				<p className='text-lg font-medium'>
					Name:{' '}
					<span className='font-normal text-base text-sub'>
						India Tour
					</span>
				</p>
				<p className='text-lg font-medium'>
					Booking ID:{' '}
					<span className='font-normal text-base text-sub'>
						{tour_id}
					</span>
				</p>
				<p className='text-lg font-medium'>
					Departure Date:{' '}
					<span className='font-normal text-base text-sub'>
						India Tour
					</span>
				</p>
				<p className='text-lg font-medium'>
					Contact email:{' '}
					<span className='font-normal text-base text-sub'>
						{email}
					</span>
				</p>
				<p className='text-lg font-medium'>
					Number of Tickets:{' '}
					<span className='font-normal text-base text-sub'>
						India Tour
					</span>
				</p>

				<p className='text-lg font-medium mt-10'>
					Total Price:{' '}
					<span className='text-primary'>${total_price}</span>
				</p>
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
