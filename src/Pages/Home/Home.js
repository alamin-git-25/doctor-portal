import React from 'react';
import Banner from './Banner/Banner';
import '../../index.css';
import './Banner/Banner.css';
import Service from '../Service/Service';
import Appoinnment from '../Service/Appoinnment';
import Review from '../Revew/Review';
import Contact from '../Contac Us/Contact';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div className='w-[100%] mx-auto overflow-hidden no-scroll'>
            <Banner/>
           <Service/>
           <Appoinnment/>
           <Review/>
           <Contact/>
           <Footer/>
        </div>
    );
};

export default Home;