import React from 'react';
import { Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const ManageBookingItem = ({
	bookingItem,
	handleStatusUpdate,
	handleDeleteBookings,
}) => {
	const {
		_id,
		name,
		user_img,
		email,
		number_tickets,
		total_price,
		booking_status,
		tour_id,
	} = bookingItem;

	return (
		<div className='bg-white px-4 py-2 grid grid-cols-10 rounded-lgshadow'>
			<div className='col-span-2 py-1 text-gray-500 flex items-center space-x-2'>
				<Avatar src={user_img} sx={{ width: 28, height: 28 }} />
				<div className='flex flex-col justify-start items-start'>
					<p className='font-medium'>{name}</p>
					<p className='text-xs'>{email}</p>
				</div>
			</div>
			<div className='col-span-2 py-1 text-gray-500'>
				<p className='font-medium'>Explore India</p>
				<p className='text-xs'>ID: {tour_id}</p>
			</div>
			<div className='col-span-2 py-1 text-gray-500'>
				<p className='font-medium'>${total_price}</p>
				<p className='text-xs'>Number of tickets: {number_tickets}</p>
			</div>
			<div className='col-span-2 py-1 text-gray-500 flex justify-start items-start'>
				<p className='bg-purple-200 text-purple-600 px-5 py-1 rounded-3xl'>
					{booking_status}
				</p>
			</div>
			<div className='col-span-2 py-1 text-gray-500 flex flex-wrap space-x-2'>
				<button
					onClick={() => handleDeleteBookings(_id)}
					className='bg-red-200 text-red-600 flex items-center justify-between px-3 py-1 space-x-2 rounded'
				>
					<DeleteIcon fontSize='small' />
					<span>Delete</span>
				</button>
				<button
					onClick={() => handleStatusUpdate(_id, 'approved')}
					disabled={booking_status === 'approved' ? true : false}
					className='bg-blue-200 text-blue-600 flex items-center justify-between px-3 py-1 space-x-2 rounded disabled:opacity-40'
				>
					<CheckBoxIcon fontSize='small' />
					<span>Approve</span>
				</button>
			</div>
		</div>
	);
};

export default ManageBookingItem;
