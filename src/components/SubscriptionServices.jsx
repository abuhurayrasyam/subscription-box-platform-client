import React from 'react';
import SubscriptionServicesCard from './SubscriptionServicesCard';

const SubscriptionServices = ({subscriptionsData}) => {
    return (
        <div className='my-10'>
            <h1 className='font-bold lg:text-5xl md:text-3xl text-2xl text-center mb-10'>Get a Subscription</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center w-11/12 mx-auto'>
                {
                    subscriptionsData.map(subscriptionData => <SubscriptionServicesCard key={subscriptionData.id} subscriptionData={subscriptionData}></SubscriptionServicesCard>)
                }
            </div>
        </div>
    );
};

export default SubscriptionServices;