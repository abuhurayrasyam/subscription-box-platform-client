import React from 'react';
import Slider from '../components/Slider';
import SubscriptionServices from '../components/SubscriptionServices';
import { useLoaderData } from 'react-router';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Home = () => {

    const subscriptionsData = useLoaderData();

    useDocumentTitle("Subscription Box | Home");

    return (
        <div>
            <section className='w-11/12 mx-auto'>
                <Slider></Slider>
            </section>
            <section className='w-11/12 mx-auto'>
                <SubscriptionServices subscriptionsData={subscriptionsData}></SubscriptionServices>
            </section>
        </div>
    );
};

export default Home;