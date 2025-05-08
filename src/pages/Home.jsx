import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import SubscriptionServices from '../components/SubscriptionServices';
import { useLoaderData } from 'react-router';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';

const Home = () => {

    const subscriptionsData = useLoaderData();

    const [slidesData, setSlidesData] = useState([]);

    useEffect(() => {
        fetch('/slidersData.json')
          .then(response => response.json())
          .then(data => setSlidesData(data))
      }, []);

    useDocumentTitle("Subscription Box | Home");

    return (
        <div>
            <section className='w-11/12 mx-auto'>
                {slidesData.length > 0 && <Slider slidesData={slidesData} />}
            </section>
            <section className='w-11/12 mx-auto'>
                <SubscriptionServices subscriptionsData={subscriptionsData}></SubscriptionServices>
            </section>
            <section>
                <HowItWorks></HowItWorks>
            </section>
            <section>
                <Testimonials></Testimonials>
            </section>
        </div>
    );
};

export default Home;