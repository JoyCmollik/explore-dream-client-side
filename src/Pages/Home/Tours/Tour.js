import React from 'react';
import { Link } from 'react-router-dom';

const Tour = (props) => {
	const { _id, tour_title, img_url, price } = props.tour;

	return (
		<div>
			<Link to={`/tourdetail/${_id}`}>
				<div className='relative'>
					<img src={img_url} alt='place' />
					<div className='absolute bottom-10 left-5 space-y-1'>
						<h2 className='text-xl'>{tour_title}</h2>
						<p className='text-sm w-3/4'>
							If you seek variety in nature and life, you go
							India.
						</p>
						<p className=''>${price}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Tour;
