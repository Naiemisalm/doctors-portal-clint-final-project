import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Postal from './Postal';
import Services from './Services';

const Home  = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Postal></Postal>
        </div>
    );
};

export default Home ;