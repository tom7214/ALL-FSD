import React from 'react';

interface ImageCardProps {
  image: string;
  text: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, text }) => {
  return (
    <div
      className="relative w-80 h-60 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <span className="text-white text-xl font-semibold">{text}</span>
      </div>
    </div>
  );
};

interface CardData {
  image: string;
  text: string;
}

const App: React.FC = () => {
  const cardData: CardData[] = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUHnf74q1SkaEXpagZtAqaQ2ziL_KOcwUjQ&s",
      text: "Master room",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUHnf74q1SkaEXpagZtAqaQ2ziL_KOcwUjQ&s",
      text: "Mattress",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUHnf74q1SkaEXpagZtAqaQ2ziL_KOcwUjQ&s",
      text: "Office",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 font-sans">
      <div className="container mx-auto">
        <div className="flex flex-row items-center gap-8 justify-center flex-wrap">
          {cardData.map((card, index) => (
            <ImageCard key={index} image={card.image} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
