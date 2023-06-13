import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const MyClass = () => {
    return (
      <div className='w-full'>
            <Helmet>
          <title>Elite Sports | Instructors </title>
        </Helmet>
        <SectionTitle heading={"My CLASS"}></SectionTitle>
        This is my class
      </div>
    );
};

export default MyClass;