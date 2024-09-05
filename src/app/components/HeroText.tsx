import { StarIcon, HeartIcon } from '../icons/Icons';

interface HeroTextProps {
  title: string;
  rating: string;
  category: string;
  description: string;
}

const HeroText: React.FC<HeroTextProps> = ({ title, rating, category, description }) => {
  return (
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-40 p-8 md:p-16 text-white">
      <p className="text-md md:text-7xl" style={{ fontFamily: "var(--font-avenir-bold)" }}>
        {title}
      </p>
      <div className="flex items-center gap-2 md:gap-4 mt-2 text-[10px]">
        <div className="flex items-center">
          <StarIcon className="w-4 h-4 md:w-8 md:h-8" />
          <div>{rating}</div>
        </div>
        <p>Category: {category}</p>
      </div>
      <p className="max-w-[620px] mt-4 md:mt-6 text-xs">
        {description}
      </p>
      <div className="flex gap-4 mt-4">
        <button className="bg-secondary text-white py-2 px-6 rounded hover:bg-white hover:text-gray-900 transition">
          Watch Now
        </button>
        <button className="outline outline-1 px-2 rounded-md flex items-center justify-center">
          <HeartIcon />
        </button>
      </div>
    </div>
  );
};

export default HeroText;
