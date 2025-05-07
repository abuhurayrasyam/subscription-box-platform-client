import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import SubscriptionServices from '../components/SubscriptionServices';
import { useLoaderData } from 'react-router';
import useDocumentTitle from '../hooks/useDocumentTitle';

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
        </div>
    );
};

export default Home;