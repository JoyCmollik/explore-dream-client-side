import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import Tour from './Tour';

const Tours = () => {
	const [tours, setTours] = useState();
	const { client } = useAxios();

	useEffect(() => {
		client.get('/tours').then((response) => {
			setTours(response.data);
		});
	}, []);

	return (
		<div className='container mx-auto'>
			<div className='grid grid-cols-4 gap-4 place-items-center'>
				{tours &&
					tours.map((tour) => <Tour key={tour._id} tour={tour} />)}
			</div>
		</div>
	);
};

export default Tours;
