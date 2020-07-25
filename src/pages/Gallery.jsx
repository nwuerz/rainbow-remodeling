import React from 'react';
import HomeButton from '../components/HomeButton';
import SimpleHeader from '../views/SimpleHeader';
import Projects from '../views/Projects';
import GalleryFooter from '../views/GalleryFooter';

const title = "Rainbow's project gallery"
const subTitle= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

const Gallery = () => {
    return ( 
        <>
        <HomeButton />
        <SimpleHeader title={title} subTitle={subTitle}/>
        <Projects />
        <GalleryFooter />
        </>
     );
}
 
export default Gallery;