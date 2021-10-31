import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const TopHeader = () => {
	const { user } = useAuth();

	return (
		<div className='hidden lg:block bg-dark py-2'>
			<div className='container mx-auto flex justify-between items-center text-xs'>
				<div className='space-x-8 flex items-center'>
					<div className='space-x-2 flex items-center'>
						<p className='text-xs font-lora'>Follow Us:</p>
						<button className='bg-transparent hover:text-primary transition duration-500'>
							<FacebookIcon sx={{ fontSize: '18px' }} />
						</button>
						<button className='bg-transparent hover:text-primary transition duration-500'>
							<InstagramIcon sx={{ fontSize: '18px' }} />
						</button>
						<button className='bg-transparent hover:text-primary transition duration-500'>
							<RedditIcon sx={{ fontSize: '18px' }} />
						</button>
						<button className='bg-transparent hover:text-primary transition duration-500'>
							<TwitterIcon sx={{ fontSize: '18px' }} />
						</button>
					</div>
					<p className='text-xs font-lora'>
						<span className='mr-1'>
							<PhoneInTalkIcon sx={{ fontSize: '18px' }} />
						</span>{' '}
						1-622-89234893
					</p>
				</div>
				{!user && (
					<Link to='/login'>
						<button className='bg-sub text-white px-4 py-1 rounded-lg'>
							LOGIN
						</button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default TopHeader;
