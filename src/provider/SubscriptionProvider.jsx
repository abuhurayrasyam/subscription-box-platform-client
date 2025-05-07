import { createContext, useState } from 'react';

export const SubscriptionContext = createContext();

const SubscriptionProvider = ({ children }) => {

  const [subscriptions, setSubscriptions] = useState([]);

  const addSubscription = (subscription) => {
    const exists = subscriptions.find(item => item.name === subscription.name);
    if (!exists) {
      setSubscriptions([subscription, ...subscriptions]);
    }
  };

  const subscriptionData = {
    subscriptions,
    addSubscription
  };

  return <SubscriptionContext.Provider value={subscriptionData}>{children}</SubscriptionContext.Provider>
};

export default SubscriptionProvider;
