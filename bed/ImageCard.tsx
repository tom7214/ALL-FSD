import React from 'react';

interface ImageCardProps {
  image: string;
  text: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, text }) => {
  return (
    <div
      className="relative w-80 h-60 bg-cover bg-center rounded overflow-hidden shadow-md"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <span className="text-white text-xl font-semibold">{text}</span>
      </div>
    </div>
  );
};

export default ImageCard;
