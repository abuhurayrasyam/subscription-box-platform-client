import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../components/Navbar';
import SubscriptionServiceDetailsCard from '../components/SubscriptionServiceDetailsCard';
import Footer from '../components/Footer';
import useDocumentTitle from '../hooks/useDocumentTitle';

const SubscriptionServiceDetails = () => {

    const {id} = useParams();

    const subscriptionsData = useLoaderData();

    const [subscription, setSubscription] = useState({});

    useEffect(() => {
        const subscriptionDetails = subscriptionsData.find(subscriptionData => subscriptionData.id == id);
        setSubscription(subscriptionDetails)
    },[id, subscriptionsData])

    useDocumentTitle(`Subscription Box | ${subscription.name}`);
    
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto'>
                <SubscriptionServiceDetailsCard subscription={subscription}></SubscriptionServiceDetailsCard>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default SubscriptionServiceDetails;