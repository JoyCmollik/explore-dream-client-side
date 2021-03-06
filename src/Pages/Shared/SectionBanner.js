import React from 'react';
import Header from './Header/Header';
import TopHeader from './Header/TopHeader';
import mainBg1 from '../../Images/main-bg1.jpg';

const SectionBanner = ({ title, short_title, banner_img }) => {
	return (
		<div
			className='bg-fix flex flex-col'
			style={{
				backgroundImage: `url(${banner_img ? banner_img : mainBg1})`,
				minHeight: '60vh',
			}}
		>
			<TopHeader />
			<Header />
			<div className='container mx-auto flex-grow flex flex-col'>
				<div className='flex-grow flex justify-center items-center'>
					<div className='text-center space-y-4'>
						<h1 className='text-2xl lg:text-5xl xl:text-7xl'>
							{title}
						</h1>
						<p className='text-lg'>{short_title}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionBanner;
