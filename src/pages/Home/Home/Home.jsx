import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../../components/Banner/Banner';
import PopularClasses from '../../../components/PopularClasses/PopularClasses';

const Home = () => {
    return (
      <div className='my-6'>
        <Helmet>
          <title>Elite Sports | Home</title>
        </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
      </div>
    );
};

export default Home;