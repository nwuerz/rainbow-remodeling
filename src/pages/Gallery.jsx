import React from "react";
import HomeButton from "../components/HomeButton";
import SimpleHeader from "../views/SimpleHeader";
import Projects from "../views/Projects";
import GalleryFooter from "../views/GalleryFooter";
import Footer from "../views/Footer";

const title = "Rainbow's project gallery";
const subTitle =
  "Since 2008, Rainbow has been providing high-quality remodeling and roofing service for residential and commercial properties, while earning a well-deserved reputation for quality, service and value. Family-owned and operated, Rainbow understands and appreciates that every customer and every home is unique.";

const Gallery = () => {
  return (
    <>
      <HomeButton />
      <SimpleHeader title={title} subTitle={subTitle} />
      <Projects />
      <GalleryFooter />
      <Footer />
    </>
  );
};

export default Gallery;
