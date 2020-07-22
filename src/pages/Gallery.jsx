import React from 'react';
import HomeButton from '../components/HomeButton';
import GalleryHeader from '../views/GalleryHeader';
import Projects from '../views/Projects';

const Gallery = () => {
    return ( 
        <>
        <HomeButton />
        <GalleryHeader />
        <Projects />
        </>
     );
}
 
export default Gallery;