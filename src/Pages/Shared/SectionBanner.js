import React from 'react';
import Header from './Header/Header';
import TopHeader from './Header/TopHeader';
import mainBg1 from '../../Images/main-bg1.jpg';

const SectionBanner = ({ title }) => {
	return (
		<div
			className='bg-cover bg-center bg-no-repeat flex flex-col'
			style={{ backgroundImage: `url(${mainBg1})`, minHeight: '60vh' }}
		>
			<TopHeader />
			<div className='container mx-auto flex-grow flex flex-col'>
				<Header />
				<div className='flex-grow flex justify-center items-center'>
					<div className='text-center space-y-4'>
						<h1 className='text-7xl'>{title}</h1>
						<p className='text-lg'>
							A journey of a 1000 miles starts with a single step.
							Checkout all the trending <br /> tour options and
							make us your partner while you visit your dream.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionBanner;
