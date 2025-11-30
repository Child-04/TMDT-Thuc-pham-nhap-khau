import React from 'react';
import Header from '../components/header/Header';
import Carousel from '../components/Slider/Carousel';
import Footer from '../components/footer/Footer'
import AppChat from '../components/AppChat/AppChat'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { useSelector } from 'react-redux';
import Vet from '../components/HotSale/components/Vet';
import Meat from '../components/HotSale/components/Meat';
import Other from '../components/HotSale/components/Other';
import ApiTest from '../components/ApiTest/ApiTest';

function HomePage(props) {
    const { userInfo } = useSelector(state => state.userSignin)

    return (
        <div style={{ position: 'relative' }}>
            <Header></Header>
            <ApiTest></ApiTest>
            <Carousel></Carousel>
            <Vet></Vet>
            <Meat></Meat>
            <Other></Other>
            <Footer></Footer>
            <ScrollToTop></ScrollToTop>
            {
                userInfo && userInfo.isAdmin === false ? (<AppChat></AppChat>) : ""
            }
        </div>
    );
}

export default HomePage;