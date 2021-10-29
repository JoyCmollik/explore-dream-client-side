import React from 'react';
import { useForm } from 'react-hook-form';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import useAxios from '../../../hooks/useAxios';
import useAuth from '../../../hooks/useAuth';

const BookingTour = (props) => {
	const { _id, price, img_url } = props.tour;
	const { register, handleSubmit, reset } = useForm();
	const { user } = useAuth();
	const { client } = useAxios();

	const onSubmit = (data) => {
		// adding the tour that ordered
		data.tour_id = _id;
		data.total_price = data.number_tickets * price;
		data.tour_img = img_url;
		// adding this user's id to track all his orders easily
		data.user_id = user.uid;
		console.log(data);
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
			<div className='flex items-center space-x-2 px-3 py-4 rounded-lg bg-white shadow'>
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

	return (
		<div className='bg-light p-4 text-white space-y-4'>
			<h2 className='text-xl text-dark'>Book this tour</h2>
			<form
				className='flex flex-col space-y-4 text-sm'
				onSubmit={handleSubmit(onSubmit)}
			>
				<CustomInput
					name='name'
					value={user?.displayName}
					icon={<BorderColorIcon fontSize='small' />}
				/>
				<CustomInput
					name='email'
					type='email'
					value={user?.email}
					icon={<BorderColorIcon fontSize='small' />}
				/>
				<CustomInput
					name='address'
					placeholder='Address'
					icon={<BorderColorIcon fontSize='small' />}
				/>
				<CustomInput
					name='phone'
					type='tel'
					placeholder='Phone'
					icon={<BorderColorIcon fontSize='small' />}
				/>
				<CustomInput
					name='number_tickets'
					type='number'
					placeholder='Number of tickets'
					icon={<BorderColorIcon fontSize='small' />}
				/>
				<textarea
					className='text-gray-400 focus:outline-none focus-within:text-dark px-3 py-4 rounded-lg bg-white shadow'
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
