import React, { useState } from 'react';
import Header from '../Shared/Header/Header';
import useAxios from '../../hooks/useAxios';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { format } from 'date-fns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import { Chip } from '@mui/material';

const AddTour = () => {
	const { register, reset, handleSubmit } = useForm();
	const { client } = useAxios();
	const [departureTime, setDepartureTime] = useState(new Date(Date.now()));
	const [returnTime, setReturnTime] = useState(new Date(Date.now()));
	const [included, setIncluded] = useState([
		'Accomodation',
		'Guide',
		'Insurance',
		'Meals',
		'Transport',
		'Flight',
	]);
	const [notIncluded, setNotIncluded] = useState([]);

	// manage included and not included list
	const handleIncludedDeletion = (index) => {
		const deletedItem = included[index];

		// transferring deleted item to notincluded list
		const newNotIncludedList = [...notIncluded, deletedItem];
		setNotIncluded(newNotIncludedList);

		// remove from included list
		const newIncludedList = included.filter((item) => item !== deletedItem);
		setIncluded(newIncludedList);
	};

	const handleNotIncludedDeletion = (index) => {
		const deletedItem = notIncluded[index];

		// transferring deleted item to included list
		const newIncludedList = [...included, deletedItem];
		setIncluded(newIncludedList);

		// remove from included list
		const newNotIncludedList = notIncluded.filter(
			(item) => item !== deletedItem
		);
		setNotIncluded(newNotIncludedList);
	};

	const onSubmit = (data) => {
		data.tour_departure_time = format(departureTime, 'p');
		data.tour_return_time = format(returnTime, 'p');
		data.tour_service_included = included;
		data.tour_service_notIncluded = notIncluded;
		const photo_collection = data.tour_photo_collection.split(
			',',
			data.tour_photo_collection.length
		);
		data.tour_photo_collection = photo_collection;
		console.log(data.tour_photo_collection);

		// sending data using axios
		client
			.post('/addtour', data)
			.then(function (response) {
				reset();
				alert('sent data');
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div className='bg-light text-gray-500'>
			<Header mode='dark' />
			<div className='container min-h-screen mx-auto flex flex-col'>
				<div className='flex-grow flex justify-center items-center'>
					<div className='bg-light w-full rounded'>
						<form
							className='p-5 bg-white shadow rounded space-y-4'
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className='grid lg:grid-cols-2 place-items-start gap-4'>
								{/* left side */}
								<div className='grid grid-cols-12 gap-4'>
									{/* input */}
									<div className='col-span-6 space-y-1'>
										<label className='uppercase font-medium'>
											Tour Title*
										</label>
										<input
											className='input-style'
											type='text'
											id='name'
											{...register('tour_title', {
												required: true,
											})}
										/>
									</div>
									{/* input */}
									<div className='col-span-6 space-y-1'>
										<label className='uppercase font-medium'>
											Tour Costing*
										</label>
										<input
											className='input-style'
											type='number'
											id='name'
											{...register('tour_price', {
												required: true,
											})}
										/>
									</div>
									{/* input */}
									<div className='col-span-12 space-y-1'>
										<label className='uppercase font-medium'>
											Tour Img URL*
										</label>
										<input
											className='input-style'
											type='text'
											id='name'
											{...register('tour_img', {
												required: true,
											})}
										/>
									</div>
									{/* input */}
									<div className='col-span-12 space-y-1'>
										<label className='uppercase font-medium'>
											Tour Banner URL
										</label>
										<input
											className='input-style'
											type='text'
											id='name'
											{...register('tour_banner')}
										/>
									</div>
									{/* input */}
									<div className='col-span-12 space-y-1'>
										<label className='uppercase font-medium'>
											Tour Short Description
										</label>
										<input
											className='input-style'
											type='text'
											id='name'
											{...register(
												'tour_short_description'
											)}
										/>
									</div>
									{/* input */}
									<div className='col-span-12 space-y-1'>
										<label className='uppercase font-medium'>
											Tour Description
										</label>
										<textarea
											className='input-style'
											type='text'
											id='name'
											style={{ minHeight: '140px' }}
											{...register('tour_description')}
										/>
									</div>
								</div>
								{/* right side */}
								<div className='grid grid-cols-12 gap-4'>
									{/* input */}
									<div className='col-span-8 space-y-1'>
										<label className='uppercase font-medium'>
											Country*
										</label>
										<input
											className='input-style'
											type='text'
											id='name'
											{...register('tour_country', {
												required: true,
											})}
										/>
									</div>
									{/* input */}
									<div className='col-span-4 space-y-1'>
										<label className='uppercase font-medium'>
											Age Limit*
										</label>
										<select
											className='input-style'
											{...register('tour_age_limit', {
												required: true,
											})}
										>
											{['10+', '14+', '16+', '18+'].map(
												(text) => (
													<option
														key={text}
														className='bg-white text-primary'
														value={text}
													>
														{text}
													</option>
												)
											)}
										</select>
									</div>
									{/* input */}
									<div className='col-span-12 lg:col-span-4 space-y-1'>
										<label className='uppercase font-medium'>
											Tour Type
										</label>
										<select
											className='input-style'
											{...register('tour_type')}
										>
											<option
												className='bg-white text-primary'
												value='Adventure'
											>
												Adventure
											</option>
											<option
												className='bg-white text-primary'
												value='Seaside'
											>
												Seaside
											</option>
										</select>
									</div>
									{/* input */}
									<div className='col-span-6 lg:col-span-4 space-y-1'>
										<label className='uppercase font-medium'>
											Departure Time*
										</label>
										<LocalizationProvider
											dateAdapter={AdapterDateFns}
										>
											<TimePicker
												value={departureTime}
												onChange={(newValue) => {
													setDepartureTime(newValue);
												}}
												renderInput={(params) => (
													<TextField {...params} />
												)}
											/>
										</LocalizationProvider>
									</div>
									{/* input */}
									<div className='col-span-6 lg:col-span-4 space-y-1'>
										<label className='uppercase font-medium'>
											Return Time*
										</label>
										<LocalizationProvider
											dateAdapter={AdapterDateFns}
										>
											<TimePicker
												value={returnTime}
												onChange={(newValue) => {
													setReturnTime(newValue);
												}}
												renderInput={(params) => (
													<TextField {...params} />
												)}
											/>
										</LocalizationProvider>
									</div>
									{/* input */}
									<div className='col-span-6 space-y-1'>
										<label className='uppercase font-medium'>
											Return Location
										</label>
										<input
											className='input-style'
											type='text'
											id='name'
											{...register(
												'tour_return_location'
											)}
										/>
									</div>
									{/* input */}
									<div className='col-span-6 space-y-1'>
										<label className='uppercase font-medium'>
											Tour Package
										</label>
										<select
											className='input-style'
											{...register('tour_package')}
										>
											<option
												className='bg-white text-primary'
												value='10 Day 9 Nights'
											>
												10 Days 9 Nights
											</option>
											<option
												className='bg-white text-primary'
												value='7 Days 6 Nights'
											>
												7 Days 6 Nights
											</option>
											<option
												className='bg-white text-primary'
												value='15 Days 14 Nights'
											>
												15 Days 14 Nights
											</option>
											<option
												className='bg-white text-primary'
												value='15 Days 14 Nights'
											>
												30 Days 29 Nights
											</option>
										</select>
									</div>
									{/* input */}
									<div className='col-span-12 space-y-1'>
										<label className='uppercase font-medium'>
											Photo Collections(URL)
										</label>
										<input
											className='input-style'
											type='text'
											id='name'
											{...register(
												'tour_photo_collection'
											)}
										/>
									</div>
									{/* input */}
									<div className='col-span-6 space-y-1'>
										<label className='uppercase font-medium'>
											Included
										</label>
										<div
											className='border border-gray-400 rounded text-gray-400 p-2 flex flex-wrap items-start justify-start'
											style={{ minHeight: '140px' }}
										>
											{included.map((text, index) => (
												<Chip
													key={index}
													sx={{ m: '4px' }}
													label={text}
													variant='outlined'
													onDelete={() =>
														handleIncludedDeletion(
															index
														)
													}
												/>
											))}
										</div>
									</div>
									{/* input */}
									<div className='col-span-6 space-y-1'>
										<label className='uppercase font-medium'>
											Not Included
										</label>
										<div
											className='border border-gray-400 rounded text-gray-400 p-2 flex items-start justify-start flex-wrap'
											style={{ minHeight: '140px' }}
										>
											{notIncluded.map((text, index) => (
												<Chip
													key={index}
													sx={{ m: '4px' }}
													label={text}
													variant='outlined'
													onDelete={() =>
														handleNotIncludedDeletion(
															index
														)
													}
												/>
											))}
										</div>
									</div>
								</div>
							</div>
							{/* submit button */}
							<input
								className='w-full px-2 py-4 bg-primary rounded-lg transform hover:scale-95 transition duration-100'
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
