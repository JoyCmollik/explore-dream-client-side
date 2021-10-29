import React from 'react';
import mainBg1 from '../../../Images/main-bg1.jpg';
import Header from '../../Shared/Header/Header';
import TopHeader from '../../Shared/Header/TopHeader';

const Banner = () => {
	return (
		<div
			className='bg-cover bg-center bg-no-repeat flex flex-col'
			style={{ backgroundImage: `url(${mainBg1})`, minHeight: '80vh' }}
		>
			<TopHeader />
			<div className='container mx-auto flex-grow flex flex-col'>
				<Header />
				<div className='flex-grow flex flex-col justify-evenly items-center'>
					<div className='text-center space-y-4'>
						<h1 className='text-7xl'>Your Journey Begins</h1>
						<p className='text-lg'>
							A journey of a 1000 miles starts with a single step.
							Checkout all the trending <br /> tour options and
							make us your partner while you visit your dream.
						</p>
					</div>
					<div className='px-10 py-7 bg-white'>
						<form className='flex items-center '>
							<input
								className='px-2 py-1 bg-none border focus:outline-none'
								type='text'
							/>
							<input
								className='px-2 py-1 bg-none border focus:outline-none'
								type='text'
							/>
							<input
								className='px-2 py-1 bg-none border focus:outline-none'
								type='text'
							/>
							<button
								className='px-2 py-1 bg-primary border'
								type='submit'
							>
								FIND NOW
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
