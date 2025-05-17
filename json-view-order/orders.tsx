import React from "react";

type Order = {
  name: string;
  price: number;
  ordernumber: string;
  purchasedon: string;
  image: string;
  quantity: number;
  total: number;
  status: string;
};

const orders: Order[] = [
  {
    name: "First Product",
    price: 60,
    ordernumber: "23E0125",
    purchasedon: "01 March 2021",
    image: "https://themes.programmingkit.xyz/rafcart/assets/images/product8.jpg",
    quantity: 2,
    total: 120,
    status: "Cancelled",
  },
  {
    name: "First Product",
    price: 50,
    ordernumber: "23E0125",
    purchasedon: "01 March 2021",
    image: "https://themes.programmingkit.xyz/rafcart/assets/images/product9.jpg",
    quantity: 3,
    total: 150,
    status: "Delivered",
  },
];

const OrderCard: React.FC<{ order: Order }> = ({ order }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-md shadow-sm mb-4 bg-white">
      <div className="flex items-center gap-4 flex-wrap">
        <img
          src={order.image}
          alt={order.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <p className="text-sm font-semibold">Order Number</p>
          <p className="text-sm">{order.ordernumber}</p>
        </div>
        <div className="ml-4">
          <p className="text-sm font-semibold">Purchased</p>
          <p className="text-sm">{order.purchasedon}</p>
        </div>
        <div className="ml-4">
          <p className="text-sm font-semibold">Quantity</p>
          <p className="text-sm">x{order.quantity}</p>
        </div>
        <div className="ml-4">
          <p className="text-sm font-semibold">Total</p>
          <p className="text-sm">${order.total}</p>
        </div>
        <div className="ml-4">
          <p className="text-sm font-semibold">Status</p>
          <p
            className={`text-sm font-semibold ${
              order.status.toLowerCase() === "delivered"
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {order.status}
          </p>
        </div>
      </div>
      <button className="text-pink-600 border border-pink-500 px-4 py-1 rounded hover:bg-pink-50">
        View Order
      </button>
    </div>
  );
};

const Orders: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {orders.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </div>
  );
};

export default Orders;
