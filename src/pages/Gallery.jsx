import React from 'react';
import HomeButton from '../components/HomeButton';
import GalleryHeader from '../views/GalleryHeader';
import Projects from '../views/Projects';
import GalleryFooter from '../views/GalleryFooter';

const Gallery = () => {
    return ( 
        <>
        <HomeButton />
        <GalleryHeader />
        <Projects />
        <GalleryFooter />
        </>
     );
}
 
export default Gallery;