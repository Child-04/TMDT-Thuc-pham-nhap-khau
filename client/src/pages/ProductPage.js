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
                
                {/* Additional Hidden SEO Content */}
                <div style={{ display: 'none' }} className="seo-content-product-extended">
                    <h2>Khám phá thế giới thực phẩm nhập khẩu đa dạng</h2>
                    <p>Trang danh mục sản phẩm của Nông sản Việt Nam là nơi bạn có thể khám phá hàng ngàn sản phẩm thực phẩm nhập khẩu chất lượng cao từ khắp thế giới. Chúng tôi tự hào mang đến cho khách hàng Việt Nam những sản phẩm tốt nhất với mức giá cạnh tranh và dịch vụ hoàn hảo.</p>
                    
                    <h3>Thực phẩm hữu cơ và sạch</h3>
                    <p>Bộ sưu tập thực phẩm hữu cơ của chúng tôi bao gồm rau củ quả tươi từ các nông trại hữu cơ được chứng nhận quốc tế. Các sản phẩm này không chứa thuốc trừ sâu, phân bón hóa học hay chất bảo quản có hại, đảm bảo an toàn tuyệt đối cho sức khỏe gia đình bạn.</p>
                    
                    <h3>Thịt và hải sản cao cấp</h3>
                    <p>Từ thịt bò Wagyu nổi tiếng của Nhật Bản, thịt cừu New Zealand đến tôm hùm Canada và cá hồi Na Uy, tất cả đều được nhập khẩu trực tiếp và bảo quản trong điều kiện lạnh tốt nhất. Mỗi sản phẩm đều có giấy chứng nhận nguồn gốc và chất lượng rõ ràng.</p>
                    
                    <h3>Sữa và sản phẩm từ sữa</h3>
                    <p>Phô mai từ các vùng nổi tiếng như Pháp, Ý, Thụy Sĩ với hương vị đặc trưng và chất lượng tuyệt hại. Bơ tươi từ New Zealand, sữa chua Hy Lạp và nhiều sản phẩm từ sữa khác đảm bảo giá trị dinh dưỡng cao và hương vị tự nhiên.</p>
                    
                    <h3>Đồ uống và thức uống</h3>
                    <p>Rượu vang từ các vùng sản xuất danh tiếng như Bordeaux, Tuscany, Napa Valley cùng với bia thủ công từ Bỉ, Đức. Bên cạnh đó là các loại trà cao cấp từ Trung Quốc, Nhật Bản, cà phê đặc sản từ Colombia, Jamaica và nhiều loại nước trái cây tự nhiên.</p>
                    
                    <h3>Bánh kẹo và đồ ngọt</h3>
                    <p>Chocolate Thụy Sĩ và Bỉ với độ tinh khiết cao, bánh quy bơ Đan Mạch, kẹo trái cây Italia và nhiều loại bánh ngọt truyền thống từ các nước châu Âu. Tất cả đều được sản xuất theo công thức truyền thống và sử dụng nguyên liệu tự nhiên.</p>
                    
                    <h3>Gia vị và nguyên liệu nấu ăn</h3>
                    <p>Bộ sưu tập gia vị đa dạng từ nghệ tây Tây Ban Nha, tiêu đen Kampot, muối hồng Himalaya đến các loại dầu olive extra virgin từ Ý và Hy Lạp. Giúp bạn tạo nên những món ăn với hương vị đặc trưng của từng vùng miền.</p>
                    
                    <h3>Thực phẩm chức năng và dinh dưỡng</h3>
                    <p>Các sản phẩm bổ sung dinh dưỡng từ các thương hiệu uy tín thế giới, thực phẩm dành cho người ăn kiêng, người tiểu đường và các nhu cầu dinh dưỡng đặc biệt khác. Tất cả đều được kiểm định về chất lượng và hiệu quả.</p>
                    
                    <h3>Hệ thống phân loại và tìm kiếm thông minh</h3>
                    <p>Website được thiết kế với hệ thống phân loại sản phẩm khoa học, giúp khách hàng dễ dàng tìm kiếm theo nhiều tiêu chí như xuất xứ, loại sản phẩm, mức giá, thương hiệu. Tính năng so sánh sản phẩm giúp bạn đưa ra quyết định mua sắm tốt nhất.</p>
                </div>
            </div>
            
            <AllProduct></AllProduct>
        </div>
    );
}

export default ProductPage;