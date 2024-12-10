import React from "react";
import Image from "next/image";
import Gallery1 from "../../../public/gallery1.svg";
import Gallery2 from "../../../public/gallery2.svg";
import Gallery3 from "../../../public/gallery3.svg";
import Gallery4 from "../../../public/gallery4.svg";
import Gallery5 from "../../../public/gallery5.svg";
import Gallery from "../../../public/gallery.png";
import Galleryy from "../../../public/galleryy.png";
import Galleryyy from "../../../public/galleryyy.png";

const StoryGallery = () => {
  return (
    <div className="py-8">
      <section className="hidden py-12 md:grid grid-cols-2 md:grid-cols-3 gap-4">
        <Image src={Gallery1} alt="Gallery1" />
        <Image src={Gallery2} alt="Gallery2" />
        <Image src={Gallery3} alt="Gallery3" />
      </section>

      <div className="flex flex-col gap-4 w-full md:hidden">
          <div className="flex gap-2">
            <Image src={Galleryy} alt="Galleryy" />
            <Image src={Galleryyy} alt="Galleryyy" />
          </div>
         <div className="flex gap-2">
         <Image src={Gallery4} alt="Gallery4" />
          <Image src={Gallery} alt="Gallery" />
          <Image src={Gallery5} alt="Gallery5" />
         </div>
        </div>
    </div>
  );
};

export default StoryGallery;
