import React from 'react';
import { useForm } from 'react-hook-form';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import useAxios from '../../../hooks/useAxios';
import useAuth from '../../../hooks/useAuth';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DatePicker';
import { format } from 'date-fns';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

const BookingTour = (props) => {
	const { _id, tour_price, tour_title, tour_img, tour_departure_time } =
		props.tour;
	const { register, handleSubmit, reset } = useForm();
	const { user } = useAuth();
	const { client } = useAxios();
	const [departureDate, setDepartureDate] = React.useState(
		format(new Date(), 'M')
	);

	const onSubmit = (data) => {
		// adding the tour that ordered
		data.tour_id = _id;
		data.total_price = parseInt(data.number_tickets) * parseInt(tour_price);
		data.tour_img = tour_img;
		data.booking_status = 'pending';
		data.tour_title = tour_title;
		data.user_departure_date = departureDate;
		data.user_departure_time = tour_departure_time;
		data.user_img = user.photoURL;
		data.user_id = user.uid;

		// sending data to server
		client
			.post('/addbooking', data)
			.then((response) => {
				console.log(response);
				if (response.status === 200) {
					alert('successfully ordered');
					reset();
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// local component
	const CustomInput = ({ name, icon, placeholder, value, type }) => {
		return (
			<div className='flex items-center border-2 space-x-2 px-1 py-2 lg:px-3 lg:py-4 rounded-lg bg-white'>
				<span className='text-primary'>{icon}</span>
				<input
					className='bg-transparent flex-grow focus:outline-none text-gray-400 focus-within:text-dark'
					type={type}
					placeholder={placeholder}
					defaultValue={value}
					autoComplete='off'
					{...register(`${name}`, { required: true })}
				/>
			</div>
		);
	};

	const DatePicker = () => {
		return (
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DesktopDatePicker
					label='Custom input'
					value={departureDate}
					onChange={(newValue) => {
						setDepartureDate(format(newValue, 'M'));
					}}
					renderInput={({ inputRef, inputProps, InputProps }) => (
						<div className='flex items-center border-2 space-x-2 px-1 py-2 lg:px-3 lg:py-4 rounded-lg bg-white'>
							<input
								className='bg-transparent flex-grow focus:outline-none text-gray-400 focus-within:text-dark'
								placeholder=' '
								ref={inputRef}
								{...inputProps}
							/>
							{InputProps?.endAdornment}
						</div>
					)}
				/>
			</LocalizationProvider>
		);
	};

	return (
		<div className='bg-light lg:p-4 text-white space-y-4 flex flex-col justify-center items-center'>
			<h2 className='text-xl text-dark'>Book this tour</h2>
			<form
				className='w-11/12 flex flex-col space-y-4 text-sm'
				onSubmit={handleSubmit(onSubmit)}
			>
				<DatePicker />
				<CustomInput
					name='name'
					value={user?.displayName}
					icon={<BorderColorIcon fontSize='small' />}
				/>
				<CustomInput
					name='email'
					type='email'
					value={user?.email}
					icon={<AlternateEmailIcon fontSize='small' />}
				/>
				<CustomInput
					name='address'
					placeholder='Address'
					icon={<ContactsIcon fontSize='small' />}
				/>
				<CustomInput
					name='phone'
					type='tel'
					placeholder='Phone'
					icon={<ContactPhoneIcon fontSize='small' />}
				/>
				<CustomInput
					name='number_tickets'
					type='number'
					placeholder='Number of tickets'
					icon={<AirplaneTicketIcon fontSize='small' />}
				/>
				<textarea
					className='text-gray-400 focus:outline-none focus-within:text-dark px-3 py-4 border-2 rounded-lg bg-white'
					placeholder='Message'
					rows='5'
					{...register('message')}
				></textarea>
				<input
					className='py-4 bg-primary text-white cursor-pointer rounded-lg'
					type='submit'
					value='BOOK NOW'
				/>
			</form>
		</div>
	);
};

export default BookingTour;
