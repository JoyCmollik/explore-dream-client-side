import React from 'react';
import Header from '../Shared/Header/Header';
import { useForm } from 'react-hook-form';
import useAxios from '../../hooks/useAxios';

const AddTour = () => {
	const { register, handleSubmit } = useForm();
	const { client } = useAxios();
	const onSubmit = (data) => {
		console.log(data);

		// sending data using axios
		client
			.post('/addtour', data)
			.then(function (response) {
				alert('sent data');
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div className='bg-dark'>
			<div className='container min-h-screen mx-auto flex flex-col'>
				<Header />
				<div className='flex-grow flex justify-center items-center'>
					<div
						className='bg-white w-full'
						style={{ maxWidth: '1000px' }}
					>
						<form
							className='p-5 space-y-4'
							onSubmit={handleSubmit(onSubmit)}
						>
							<input
								className='w-full px-2 py-4 border text-gray-400 focus:outline-none focus-within:text-gray-900 focus-within:border-gray-400'
								{...register('tour_title', { required: true })}
								placeholder='name'
							/>
							<input
								className='w-full px-2 py-4 border text-gray-400 focus:outline-none focus-within:text-gray-900 focus-within:border-gray-400'
								{...register('price', { required: true })}
								placeholder='costing of the tour'
							/>
							<input
								className='w-full px-2 py-4 border text-gray-400 focus:outline-none focus-within:text-gray-900 focus-within:border-gray-400'
								{...register('img_url', { required: true })}
								placeholder='image url'
							/>
							<input
								className='w-full px-2 py-4 bg-primary border'
								type='submit'
								value='Add'
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddTour;
