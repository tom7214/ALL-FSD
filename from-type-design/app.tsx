import React from 'react';

// Define types for ImageCard props
interface ImageCardProps {
  imageUrl: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 w-full max-w-md mx-auto">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x300/cccccc/808080?text=${title}`; }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white p-4">
        <h3 className="text-3xl font-extrabold text-center drop-shadow-lg">{title}</h3>
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="px-4 sm:px-0">
          <div className="bg-white shadow-md rounded-lg p-8 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">LEAVE US A MESSAGE</h2>
              <p className="text-gray-600 mb-6 text-sm">Use the form below to get in touch with our sales team.</p>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 text-xs font-bold mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 text-xs font-bold mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-xs font-bold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 text-xs font-bold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-xs font-bold mb-2">
                      Your message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
                    ></textarea>
                  </div>
                </form>
              </div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm self-start"
                type="submit"
              >
                SEND MESSAGE
              </button>
            </div>
          </div>

          <div className="px-4 sm:px-0">
            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-sm font-semibold text-gray-800 mb-3">OUR STORE</h2>
              <ul className="text-gray-700 text-xs">
                <li className="mb-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline mr-1 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-4.036 13.07-8.964 13.07-4.928 0-8.964-5.928-8.964-13.07 0-2.14.518-4.23 1.442-6.053m17.02-1.82C19.675 7.73 15.985 12 12 12s-3.985-4.27-8.558-7.87a3.374 3.374 0 006.916 0z" />
                  </svg>
                  1056 B Dr, New Aliquippa, PA 15001, United States Of America
                </li>
                <li className="mb-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline mr-1 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h8.25a2.25 2.25 0 002.25-2.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                  +1 669-277-2165, +1 669-264-579
                </li>
                <li className="mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline mr-1 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25z" />
                  </svg>
                  info@yourdomain.com
                </li>
              </ul>

              <h2 className="text-sm font-semibold text-gray-800 mt-5 mb-3">HOURS OF OPERATION</h2>
              <ul className="text-gray-700 text-xs">
                <li className="flex justify-between mb-1"><span>Saturday</span><span>10:00 PM</span></li>
                <li className="flex justify-between mb-1"><span>Sunday</span><span>12:00 PM</span></li>
                <li className="flex justify-between mb-1"><span>Monday</span><span>12:00 PM</span></li>
                <li className="flex justify-between mb-1"><span>Tuesday</span><span>12:00 PM</span></li>
                <li className="flex justify-between mb-1"><span>Wednesday</span><span>12:00 PM</span></li>
                <li className="flex justify-between mb-1"><span>Thursday</span><span>12:00 PM</span></li>
                <li className="flex justify-between"><span>Friday</span><span>12:00 PM</span></li>
              </ul>

              <h2 className="text-sm font-semibold text-gray-800 mt-5 mb-3">CAREERS</h2>
              <p className="text-gray-700 text-xs">If you are interesting in employment opportunities at RAFCart, please email us: <a href="mailto:hr@rafcart.com" className="text-red-500 hover:underline">hr@rafcart.com</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  
  interface CardDataItem {
    imageUrl: string;
    title: string;
  }

  const App: React.FC = () => {

    const cardData: CardDataItem[] = [
      {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZCIJ373Vj8Zm01NFmirsKnNA91Mq1gMWYg&s",
        title: 'Bedroom',
      },
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZCIJ373Vj8Zm01NFmirsKnNA91Mq1gMWYg&s',
        title: 'Mattresses',
      },
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZCIJ373Vj8Zm01NFmirsKnNA91Mq1gMWYg&s',
        title: 'Office',
      },
    ];

    return (
      <div className="min-h-screen bg-white">
        <ContactSection />
        
      </div>
    );
  };

  export default App;
