import React from 'react';
import { Link } from 'react-router-dom';

const Tour = (props) => {
	const { _id, tour_title, tour_img, tour_price } = props.tour;

	return (
		<div
			style={{
				maxWidth: '800px',
				height: '500px',
				background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5)), url(${tour_img})`,
			}}
			className='bg-cover bg-no-repeat m-2 text-white rounded-lg overflow-hidden flex items-end transform hover:scale-95 transition duration-500 overflow-hidden'
		>
			<div className='p-4 space-y-4'>
				<h2 className='text-3xl font-bold'>
					{tour_title} | ${tour_price}
				</h2>
				<p className='text-sm w-3/4'>
					If you seek variety in nature and life, you go India.
				</p>
				<Link to={`/tourdetail/${_id}`}>
					<button className='bg-primary px-5 py-2 rounded mt-4'>
						Book Now
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Tour;
