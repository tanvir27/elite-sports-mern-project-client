import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../../components/Banner/Banner';

const Home = () => {
    return (
      <div className='my-6'>
        <Helmet>
          <title>Elite Sports | Home</title>
        </Helmet>
       <Banner></Banner>
      </div>
    );
};

export default Home;