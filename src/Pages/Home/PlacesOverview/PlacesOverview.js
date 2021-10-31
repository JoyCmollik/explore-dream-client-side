import React from 'react';
import africa from '../../../Images/africa.jpg';
import india from '../../../Images/india.jpg';
import china from '../../../Images/china.jpg';
import thailand from '../../../Images/thailand.jpg';

const PlacesOverview = () => {
	return (
		<div className='container mx-auto space-y-10'>
			<div className='text-center space-y-4'>
				<h2 className='heading'>Go Exotic Places</h2>
				<p className='text-sub lg:w-2/4 mx-auto'>
					When it comes to exploring exotic places, the choices are
					numerous. Whether you like peaceful destinations or vibrant
					landscapes, we have offers for you.
				</p>
			</div>
			<div className='grid grid-cols-12 gap-2 lg:gap-5 overflow-hidden'>
				<div className='col-span-8'>
					<div className='grid grid-cols-1 gap-2 lg:gap-5'>
						<div className='overflow-hidden rounded-lg relative'>
							<img
								className='overview-img'
								src={africa}
								alt='africa'
							/>
							<h2 className='overview-text'>Africa</h2>
						</div>
						<div className='grid grid-cols-2 gap-2 lg:gap-5'>
							<div className='overflow-hidden rounded-lg relative'>
								<img
									className='overview-img'
									src={thailand}
									alt='thailand'
								/>
								<h2 className='overview-text'>Thailand</h2>
							</div>
							<div className='overflow-hidden rounded-lg relative'>
								<img
									className='overview-img'
									src={china}
									alt='china'
								/>
								<h2 className='overview-text'>China</h2>
							</div>
						</div>
					</div>
				</div>
				<div className='col-span-4 overflow-hidden rounded-lg relative'>
					<img className='overview-img' src={india} alt='india' />
					<h2 className='overview-text'>India</h2>
				</div>
			</div>
		</div>
	);
};

export default PlacesOverview;
