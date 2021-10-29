import React from 'react';
import { Link } from 'react-router-dom';

const TopHeader = () => {
	return (
		<div className='hidden lg:block bg-dark py-2'>
			<div className='container mx-auto flex justify-between items-center text-xs'>
				<div className='space-x-4 flex items-center'>
					<p>FOLLOW US: facebook</p>
					<p>1-622-89234893</p>
				</div>
				<Link to='/login'>
					<button className='bg-none'>LOGIN</button>
				</Link>
			</div>
		</div>
	);
};

export default TopHeader;
