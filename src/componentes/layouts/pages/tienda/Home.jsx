import React from 'react';
import Header from "./Header";
import Products from './productos/Products';
import SectionPrendas from './SectionPrendas';
import Banner from './Banner';
import Footer from './Footer';
import "./Header.css";

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <SectionPrendas />
            <div className='lowerBanner'>
                <img src="https://github.com/brayanc777/metodologias/blob/main/metodologias/metodologias/img/OutMar_bn_20240306.jpg?raw=true" alt="" />
            </div>
            <Footer />


        </div>
    );
};

export default Home;
