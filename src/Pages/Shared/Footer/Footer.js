import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='bg-dark py-10'>
			<div className='container mx-auto'>
				<div className='grid lg:grid-cols-4 gap-4'>
					<div className='space-y-4 text-center lg:text-left'>
						<h2 className='text-xl'>exploreDream</h2>
						<p className='text-gray-400'>
							Let us be your partner while you go around the
							entire earth.
						</p>
					</div>
					<div className='text-xs lg:text-base lg:col-span-2 grid place-items-center lg:place-items-start grid-cols-2'>
						<div className='flex flex-col space-y-2'>
							<NavLink
								className='text-gray-400 hover:text-white'
								to='/'
							>
								Newsletter
							</NavLink>
							<NavLink
								className='text-gray-400 hover:text-white'
								to='/'
							>
								Outdoor Activities
							</NavLink>
							<NavLink
								className='text-gray-400 hover:text-white'
								to='/'
							>
								City Tours
							</NavLink>
							<NavLink
								className='text-gray-400 hover:text-white'
								to='/'
							>
								Cultural & Thematic Tours
							</NavLink>
						</div>
						<div className='flex flex-col space-y-2'>
							<NavLink
								className='text-gray-400 hover:text-white'
								to='/'
							>
								Family Friendly Tours
							</NavLink>
							<NavLink
								className='text-gray-400 hover:text-white'
								to='/'
							>
								Relaxation Tours
							</NavLink>
							<NavLink
								className='text-gray-400 hover:text-white'
								to='/'
							>
								Holiday & Seasonal Tours
							</NavLink>
							<NavLink
								className='text-gray-400 hover:text-white'
								to='/'
							>
								Wild & Adventure Tours
							</NavLink>
						</div>
					</div>
					<div className='text-center lg:text-left flex flex-col space-y-2 text-gray-400'>
						<h4 className=''>CONTACTS</h4>
						<p>
							Address:{' '}
							<span className='text-white'>
								12 Main Street Pt. London
							</span>
						</p>
						<p>
							Phone:{' '}
							<span className='text-white'>+1 1234 6789 10</span>
						</p>
						<p className='text-white'>info@exploreDream.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
