import React from 'react';
import Login from '../Login/Login';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Postal from './Postal';
import Services from './Services';
import Testimonials from './Testimonials';

const Home  = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Postal></Postal>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default Home ;