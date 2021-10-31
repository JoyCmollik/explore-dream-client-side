import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const TourGallery = ({ tourPhotoCollection = [] }) => {
	return (
		<Box sx={{ width: '100%', height: '100%' }}>
			<ImageList variant='masonry' cols={3} gap={8}>
				{tourPhotoCollection.map((item) => (
					<ImageListItem key={item}>
						<img
							src={`${item}?w=248&fit=crop&auto=format`}
							srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
							alt={item}
							loading='lazy'
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
};

export default TourGallery;
