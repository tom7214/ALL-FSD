import React from 'react';
import ImageCard from './ImageCard';

const App: React.FC = () => {
  return (
    <div className="flex justify-center gap-4 p-4 flex-wrap">
      <ImageCard image="https://via.placeholder.com/300x200?text=Master+Room" text="Master room" />
      <ImageCard image="https://via.placeholder.com/300x200?text=Mattress" text="Mattress" />
      <ImageCard image="https://via.placeholder.com/300x200?text=Office" text="Office" />
    </div>
  );
};

export default App;
