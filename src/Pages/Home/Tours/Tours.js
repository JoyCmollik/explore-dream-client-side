import React from 'react';
import Tour from './Tour';

const Tours = () => {
	return (
		<div className='container mx-auto'>
			<div className='grid grid-cols-4 gap-4 place-items-center'>
				<Tour />
				<Tour />
				<Tour />
				<Tour />
				<Tour />
				<Tour />
				<Tour />
				<Tour />
			</div>
		</div>
	);
};

export default Tours;
