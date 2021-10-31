import React, { useEffect, useState } from 'react';
import SectionBanner from '../Shared/SectionBanner';
import Footer from '../Shared/Footer/Footer';
import { NavLink } from 'react-router-dom';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import imge from '../../Images/Tours.jpg';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import MyBookingItem from './MyBookingItem';

const MyBookings = () => {
	const { user } = useAuth();
	const [bookings, setBookings] = useState([]);
	const { client } = useAxios();
	const [isBookingsUpdated, setIsBookingsUpdated] = useState(true);

	useEffect(() => {
		client.get(`/bookings/${user.uid}`).then((response) => {
			if (!setIsBookingsUpdated) {
				setIsBookingsUpdated(true);
			}
			setBookings(response.data);
		});
	}, [isBookingsUpdated]);

	const handleCancelBooking = (id) => {
		const proceed = window.confirm('are you confirm to cancel?');

		if (proceed) {
			client.delete(`/cancelbooking/${id}`).then((response) => {
				if (response.data.deletedCount === 1) {
					setIsBookingsUpdated(false);
					alert('We have cancelled booking! :-(');
				}
			});
		}
	};

	return (
		<div className='flex flex-col min-h-screen space-y-20'>
			<SectionBanner title='My Bookings' />
			<div className='container mx-auto flex-grow grid grid-cols-12 text-dark'>
				<div className='col-span-12 lg:col-span-4 mb-10 lg:mb-0'>
					<NavLink
						className='space-x-2 flex items-center'
						to='/bookings'
					>
						<span className='text-primary'>
							<AirplaneTicketIcon />
						</span>
						<span>My Bookings</span>
					</NavLink>
				</div>
				<div className='col-span-12 lg:col-span-8 space-y-4 place-items-center px-4 lg:px-0'>
					{bookings.length ? (
						bookings.map((booking) => (
							<MyBookingItem
								key={booking._id}
								booking={booking}
								handleCancelBooking={handleCancelBooking}
							/>
						))
					) : (
						<p className='p-1 bg-yellow-200 text-dark rounded-lg'>
							Currently You Don't Have Any Of The Bookings
						</p>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MyBookings;
