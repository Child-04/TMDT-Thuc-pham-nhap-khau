import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import Header from '../components/header/Header';
import AllProduct from '../components/allProduct/AllProduct';

ProductPage.propTypes = {
    
};

function ProductPage(props) {
    return (
        <div>
            <Helmet>
                <title>Sản phẩm - Nông sản Việt Nam | Thực phẩm nhập khẩu đa dạng</title>
                <meta name="description" content="Khám phá bộ sưu tập thực phẩm nhập khẩu đa dạng tại Nông sản Việt Nam. Từ thực phẩm organic đến đồ uống cao cấp, tất cả với chất lượng tốt nhất và giá cả hợp lý." />
                <meta name="keywords" content="danh sách sản phẩm, thực phẩm nhập khẩu, organic, đồ uống, bánh kẹo, gia vị, sản phẩm chất lượng" />
                <link rel="canonical" href="https://tmdt-thuc-pham-nhap-khau-client.onrender.com/product" />
                
                <script type="application/ld+json">
                  {`{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Sản phẩm thực phẩm nhập khẩu",
                    "description": "Danh sách đầy đủ các sản phẩm thực phẩm nhập khẩu chất lượng cao",
                    "url": "https://tmdt-thuc-pham-nhap-khau-client.onrender.com/product"
                  }`}
                </script>
            </Helmet>
            <Header></Header>
            <AllProduct></AllProduct>
        </div>
    );
}

export default ProductPage;