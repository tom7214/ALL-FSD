import React from 'react';

interface Order {
  name: string;
  price: number;
  ordernumber: string;
  purchasedon: string;
  Image: string;
  quantity: number;
  total: number;
  status: 'cancelled' | 'Delivered';
}

const orders: Order[] = [
  {
    name: "First Product",
    price: 60,
    ordernumber: "23E0125",
    purchasedon: "01 March 2021",
    Image: "https://themes.programmingkit.xyz/rafcart/assets/images/product8.jpg",
    quantity: 2,
    total: 120,
    status: "cancelled"
  },
  {
    name: "Second Product",
    price: 50,
    ordernumber: "23E0126",
    purchasedon: "01 March 2021",
    Image: "https://themes.programmingkit.xyz/rafcart/assets/images/product9.jpg",
    quantity: 3,
    total: 150,
    status: "Delivered"
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Order History</h1>

        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start border border-gray-200 rounded-lg p-4 shadow-sm relative"
            >
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                <img
                  src={order.Image}
                  alt={order.name}
                  className="w-24 h-24 object-contain rounded-md"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/96x96/E0E0E0/333333?text=No+Image';
                  }}
                />
              </div>

              <div className="flex-grow text-center sm:text-left">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{order.name}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2 text-sm text-gray-700">
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="font-medium text-gray-500">Order Number</span>
                    <span className="font-bold">{order.ordernumber}</span>
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="font-medium text-gray-500">Purchased</span>
                    <span className="font-bold">{order.purchasedon}</span>
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="font-medium text-gray-500">Quantity</span>
                    <span className="font-bold">x{order.quantity}</span>
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="font-medium text-gray-500">Total</span>
                    <span className="font-bold">${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-end justify-between mt-4 sm:mt-0 sm:ml-6">
                <span
                  className={`font-bold text-lg mb-4 sm:mb-0 ${
                    order.status === 'cancelled' ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {order.status}
                </span>
                <button className="bg-white text-red-500 border border-red-500 px-5 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200 text-sm font-medium">
                  View Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
