import React from "react";
import images from "../dummy_data/images"; 

interface ImageData {
  id: number;
  title: string;
  url: string;
}

const ImageGallery: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6 p-8 md:p-16 pt-0 w-full h-auto bg-[#1A1A1A]">
      <h1 className='text-2xl text-white' style={{ fontFamily: 'var(--font-avenir-bold)' }}>
        Throwback Anime!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-[600px]">
        {images.slice(0, 3).map((image: ImageData) => (
          <div key={image.id} className="flex-1 rounded-xl overflow-hidden shadow-lg outline outline-1 outline-white">
            <img className="w-full h-full object-cover" src={image.url} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
