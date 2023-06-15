import React from 'react';
import { Helmet } from 'react-helmet-async';


const PageHelmate = ({title}) => {
    return (
        <div>
        <Helmet>
        <title>Summer Vacation|{title}</title>
      </Helmet>
        </div>
    );
};

export default PageHelmate;