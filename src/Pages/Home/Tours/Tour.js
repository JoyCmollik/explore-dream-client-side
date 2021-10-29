import React from 'react';
import { Link } from 'react-router-dom';
import tourImg from '../../../Images/Tours.jpg';

const Tour = () => {
	const _id = 1;

	return (
		<div>
			<Link to={`/tourdetail/${_id}`}>
				<div className='relative'>
					<img src={tourImg} alt='place' />
					<div className='absolute bottom-10 left-5 space-y-1'>
						<h2 className='text-xl'>Discover India</h2>
						<p className='text-sm w-3/4'>
							If you seek variety in nature and life, you go
							India.
						</p>
						<p className=''>$1650</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Tour;
