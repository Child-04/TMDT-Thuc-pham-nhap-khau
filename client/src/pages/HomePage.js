import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/header/Header';
import Carousel from '../components/Slider/Carousel';
import Footer from '../components/footer/Footer'
import AppChat from '../components/AppChat/AppChat'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { useSelector } from 'react-redux';
import Vet from '../components/HotSale/components/Vet';
import Meat from '../components/HotSale/components/Meat';
import Other from '../components/HotSale/components/Other';

function HomePage(props) {
    const { userInfo } = useSelector(state => state.userSignin)

    return (
        <div style={{ position: 'relative' }}>
            <Helmet>
                <title>Nông sản Việt Nam - Thực phẩm nhập khẩu chất lượng cao | Mua sắm online</title>
                <meta name="description" content="Mua sắm thực phẩm nhập khẩu chất lượng cao tại Nông sản Việt Nam. Hàng ngàn sản phẩm từ khắp thế giới, giao hàng nhanh, giá tốt nhất. Thực phẩm organic, đồ uống, bánh kẹo cao cấp." />
                <meta name="keywords" content="thực phẩm nhập khẩu, mua sắm online, nông sản việt nam, thực phẩm chất lượng, organic food, thực phẩm an toàn, giao hàng nhanh" />
                <link rel="canonical" href="https://tmdt-thuc-pham-nhap-khau-client.onrender.com/" />
                
                <meta property="og:title" content="Nông sản Việt Nam - Thực phẩm nhập khẩu chất lượng cao" />
                <meta property="og:description" content="Mua sắm thực phẩm nhập khẩu chất lượng cao với hàng ngàn sản phẩm từ khắp thế giới" />
                <meta property="og:url" content="https://tmdt-thuc-pham-nhap-khau-client.onrender.com/" />
                <meta property="og:type" content="website" />
                
                <script type="application/ld+json">
                  {`{
                    "@context": "https://schema.org",
                    "@type": "Store",
                    "name": "Nông sản Việt Nam",
                    "description": "Cửa hàng thực phẩm nhập khẩu chất lượng cao",
                    "url": "https://tmdt-thuc-pham-nhap-khau-client.onrender.com",
                    "telephone": "+84-123-456-789",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "123 Đường ABC",
                      "addressLocality": "Hồ Chí Minh",
                      "addressCountry": "VN"
                    },
                    "openingHours": "Mo-Su 00:00-23:59",
                    "paymentAccepted": ["Visa", "MasterCard", "Cash", "Bank Transfer"],
                    "currenciesAccepted": "VND"
                  }`}
                </script>
            </Helmet>
            <Header></Header>
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