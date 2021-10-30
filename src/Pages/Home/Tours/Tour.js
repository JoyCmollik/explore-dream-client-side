import React from 'react';
import { Link } from 'react-router-dom';

const Tour = (props) => {
	const { _id, tour_title, tour_img, tour_price } = props.tour;

	return (
		<div>
			<Link to={`/tourdetail/${_id}`}>
				<div className='relative'>
					<img src={tour_img} alt='place' />
					<div className='absolute bottom-10 left-5 space-y-1'>
						<h2 className='text-xl'>{tour_title}</h2>
						<p className='text-sm w-3/4'>
							If you seek variety in nature and life, you go
							India.
						</p>
						<p className=''>${tour_price}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Tour;
