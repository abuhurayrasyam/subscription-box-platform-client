import React from "react";
import { Link } from "react-router";

const SubscriptionServicesCard = ({ subscriptionData }) => {
  const { id, thumbnail, name, techCategory, price, frequency } = subscriptionData;

  return (
    <div className="w-11/12 mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 transition-transform hover:scale-[1.02] duration-200">
      <img src={thumbnail}  alt={name} className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mt-1">
          Category: <span className="font-medium">{techCategory}</span>
        </p>
        <p className="text-sm text-gray-700 mt-1">
          Price: <span className="font-semibold text-green-600">{price}</span>
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Frequency: <span className="font-medium">{frequency}</span>
        </p>
        <Link to={`/subscription-details/${id}`} className="w-full bg-base-300 hover:bg-gray-400 text-black hover:text-white border border-gray-300 py-2 px-3 rounded-md cursor-pointer">
          View More
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionServicesCard;
