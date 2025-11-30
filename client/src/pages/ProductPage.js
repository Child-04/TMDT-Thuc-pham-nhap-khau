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
            
            {/* SEO Content Section */}
            <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#f8f9fa' }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h1 style={{ fontSize: '2.5em', color: '#2c3e50', marginBottom: '20px' }}>
                        Danh mục sản phẩm thực phẩm nhập khẩu
                    </h1>
                    <p style={{ fontSize: '1.1em', color: '#7f8c8d', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>
                        Khám phá bộ sưu tập đa dạng với hàng ngàn sản phẩm thực phẩm nhập khẩu chất lượng cao từ khắp nơi trên thế giới. Từ thực phẩm hữu cơ, đồ uống cao cấp đến các loại gia vị đặc biệt, tất cả đều được tuyển chọn kỹ càng để mang đến trải nghiệm ẩm thực tuyệt vời cho bạn.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                        <h3 style={{ color: '#27ae60', marginBottom: '10px' }}>🥬 Thực phẩm tươi sống</h3>
                        <p style={{ fontSize: '0.95em', lineHeight: '1.5' }}>Rau củ quả hữu cơ, thịt và hải sản tươi ngon nhập khẩu từ các nông trại uy tín.</p>
                    </div>
                    
                    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                        <h3 style={{ color: '#e74c3c', marginBottom: '10px' }}>🍫 Bánh kẹo cao cấp</h3>
                        <p style={{ fontSize: '0.95em', lineHeight: '1.5' }}>Chocolate Thụy Sĩ, bánh quy Pháp và các loại kẹo trái cây từ Italia.</p>
                    </div>
                    
                    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                        <h3 style={{ color: '#3498db', marginBottom: '10px' }}>🍷 Đồ uống nhập khẩu</h3>
                        <p style={{ fontSize: '0.95em', lineHeight: '1.5' }}>Rượu vang, trà, cà phê và nước trái cây từ các thương hiệu danh tiếng.</p>
                    </div>
                    
                    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                        <h3 style={{ color: '#f39c12', marginBottom: '10px' }}>🌶️ Gia vị & ướp</h3>
                        <p style={{ fontSize: '0.95em', lineHeight: '1.5' }}>Gia vị Ấn Độ, thảo mộc Địa Trung Hải và các loại sauce đặc biệt.</p>
                    </div>
                </div>

                <div style={{ background: 'white', padding: '25px', borderRadius: '10px', marginBottom: '20px' }}>
                    <h2 style={{ color: '#2c3e50', marginBottom: '15px', textAlign: 'center' }}>Hướng dẫn mua sắm</h2>
                    <p style={{ lineHeight: '1.7', fontSize: '1em', marginBottom: '15px' }}>
                        <strong>Bước 1:</strong> Sử dụng bộ lọc bên trái để tìm kiếm sản phẩm theo danh mục, khoảng giá hoặc thương hiệu mong muốn.
                    </p>
                    <p style={{ lineHeight: '1.7', fontSize: '1em', marginBottom: '15px' }}>
                        <strong>Bước 2:</strong> Nhấp vào sản phẩm để xem thông tin chi tiết, đánh giá từ khách hàng và hình ảnh chất lượng cao.
                    </p>
                    <p style={{ lineHeight: '1.7', fontSize: '1em' }}>
                        <strong>Bước 3:</strong> Thêm sản phẩm vào giỏ hàng và tiến hành thanh toán an toàn với nhiều phương thức khác nhau.
                    </p>
                </div>
            </div>
            
            <AllProduct></AllProduct>
        </div>
    );
}

export default ProductPage;