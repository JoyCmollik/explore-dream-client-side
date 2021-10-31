import React from 'react';
import introBg from '../../../Images/about-bg.jpg';

const Introduction = () => {
	return (
		<div className='container mx-auto grid lg:grid-cols-2 gap-10'>
			<div>
				<img className='w-full rounded-lg' src={introBg} alt='intro' />
			</div>
			<div className='space-y-4 flex flex-col justify-center items-start'>
				<h2 className='heading'>
					Find More Perfect Places <br /> To Get Lost
				</h2>
				<p className='text-sub lg:w-3/4'>
					Treat yourself with a journey to your inner self. Visit a
					mystique Tibet and start your spiritual adventure. We
					promise, you’ll enjoy every step you make.
				</p>
				<button className='px-5 py-3 uppercase bg-primary text-white font-medium'>
					see more
				</button>
			</div>
		</div>
	);
};

export default Introduction;
