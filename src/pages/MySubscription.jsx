import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { SubscriptionContext } from '../provider/SubscriptionProvider';

const MySubscription = () => {

  useDocumentTitle("Subscription Box | My Subscription");

  const { subscriptions } = useContext(SubscriptionContext);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto my-10">
        <h1 className="text-center font-bold lg:text-4xl md:text-3xl text-2xl mb-8"> My Subscriptions </h1>
        {subscriptions.length === 0 ? (
          <p className="text-center text-gray-500">No subscriptions yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
            {subscriptions.map((item, index) => (
              <div key={index} className="border border-gray-300 rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition-shadow">
                <img src={item.thumbnail} alt="" className="w-full h-40 p-3 rounded-md mb-4" />
                <h2 className="text-lg font-bold mb-1">{item.name}</h2>
                <p className="text-sm text-gray-600 mb-1"> Category : {item.techCategory}</p>
                <p className="text-green-600 font-semibold mb-1">{item.price} / {item.frequency}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MySubscription;
