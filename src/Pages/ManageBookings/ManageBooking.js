import { LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import ManageBookingItem from './ManageBookingItem';
import { useSnackbar } from 'notistack';

const ManageBooking = () => {
	const [allBookings, setAllBookings] = useState([]);
	const { client } = useAxios();
	const [isDataUpdated, setIsDataUpdated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { enqueueSnackbar } = useSnackbar();
	let variant = 'success';

	useEffect(() => {
		client.get('/allbookings').then((response) => {
			if (!isDataUpdated) {
				setIsDataUpdated(true);
			}
			setAllBookings(response.data);
		});
	}, [isDataUpdated]);

	const handleStatusUpdate = (_id, booking_status) => {
		setIsLoading(true);
		const data = { booking_status };

		client.put(`/updatebooking/${_id}`, data).then((response) => {
			setIsDataUpdated(false);
			setIsLoading(false);
		});
	};

	const handleDeleteBookings = (id) => {
		const proceed = window.confirm('are you confirm to cancel?');

		if (proceed) {
			setIsLoading(true);
			client.delete(`/cancelbooking/${id}`).then((response) => {
				if (response.data.deletedCount === 1) {
					setIsDataUpdated(false);
					setIsLoading(false);
					enqueueSnackbar('Booking has been deleted successfully!', {
						variant,
					});
				}
			});
		}
	};

	const headingTitle = ['Client', 'Booking', 'Costing', 'Status', 'Actions'];

	return (
		<div className='flex flex-col min-h-screen space-y-20'>
			<Header mode='dark' />
			<div className='flex-grow container mx-auto my-2 shadow rounded-lg bg-light overflow-hidden'>
				{/* heading */}
				<div className='bg-primary text-dark flex justify-between items-center px-4 py-2'>
					<h2 className='text-lg'>Tour Bookings</h2>
					<div className=''>
						<input
							className='px-4 py-2 bg-white rounded-lg'
							type='text'
							placeholder='Search Booking....'
						/>
					</div>
				</div>
				{isLoading || !isDataUpdated ? <LinearProgress /> : ''}
				{/* bookings */}
				<div className='space-y-2 p-2'>
					{/* headerTitle */}
					<div className='hidden px-4 xl:grid grid-cols-10'>
						{headingTitle.map((title, index) => (
							<div
								className='col-span-2 py-1 text-dark font-medium'
								key={index}
							>
								{title}
							</div>
						))}
					</div>
					{/* list */}
					{allBookings &&
						allBookings.map((bookingItem) => (
							<ManageBookingItem
								key={bookingItem._id}
								bookingItem={bookingItem}
								handleStatusUpdate={handleStatusUpdate}
								handleDeleteBookings={handleDeleteBookings}
							/>
						))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ManageBooking;
