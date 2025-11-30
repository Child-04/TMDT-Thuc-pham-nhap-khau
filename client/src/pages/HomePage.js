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
            
            {/* SEO Content Section */}
            <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#f8f9fa' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1 style={{ fontSize: '2.5em', color: '#2c3e50', marginBottom: '20px' }}>
                        Nông sản Việt Nam - Thực phẩm nhập khẩu chất lượng hàng đầu
                    </h1>
                    <p style={{ fontSize: '1.2em', color: '#7f8c8d', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
                        Chào mừng bạn đến với Nông sản Việt Nam, nơi cung cấp những sản phẩm thực phẩm nhập khẩu chất lượng cao từ khắp thế giới. Chúng tôi tự hào mang đến cho khách hàng Việt Nam những sản phẩm tươi ngon, an toàn và dinh dưỡng với mức giá cạnh tranh nhất thị trường.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                    <div style={{ background: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ color: '#27ae60', marginBottom: '15px', fontSize: '1.5em' }}>🌱 Thực phẩm Organic</h2>
                        <p style={{ lineHeight: '1.6', fontSize: '1.1em' }}>
                            Khám phá bộ sưu tập thực phẩm hữu cơ được chứng nhận quốc tế. Từ rau củ quả tươi đến các sản phẩm chế biến, tất cả đều đảm bảo không chất bảo quản có hại, không thuốc trừ sâu, mang đến sự an toàn tuyệt đối cho gia đình bạn.
                        </p>
                    </div>
                    
                    <div style={{ background: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ color: '#e74c3c', marginBottom: '15px', fontSize: '1.5em' }}>🍷 Đồ uống cao cấp</h2>
                        <p style={{ lineHeight: '1.6', fontSize: '1.1em' }}>
                            Thưởng thức những loại rượu vang danh tiếng từ Pháp, Italia, Tây Ban Nha cùng với các loại nước trái cây tự nhiên, trà và cà phê đặc biệt từ những vùng sản xuất nổi tiếng nhất thế giới.
                        </p>
                    </div>
                    
                    <div style={{ background: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ color: '#3498db', marginBottom: '15px', fontSize: '1.5em' }}>🧀 Sản phẩm từ sữa</h2>
                        <p style={{ lineHeight: '1.6', fontSize: '1.1em' }}>
                            Bộ sưu tập phô mai châu Âu đa dạng, bơ tươi New Zealand, sữa chua Hy Lạp và các sản phẩm từ sữa chất lượng cao khác, đảm bảo nguồn gốc rõ ràng và hương vị tuyệt vời.
                        </p>
                    </div>
                </div>

                <div style={{ background: 'white', padding: '30px', borderRadius: '15px', marginBottom: '40px' }}>
                    <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px', fontSize: '2em' }}>
                        Tại sao chọn Nông sản Việt Nam?
                    </h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3em', marginBottom: '15px' }}>✅</div>
                            <h3 style={{ color: '#27ae60', marginBottom: '10px' }}>Chất lượng đảm bảo</h3>
                            <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
                                Tất cả sản phẩm đều được kiểm tra nghiêm ngặt về chất lượng, nguồn gốc xuất xứ và đảm bảo an toàn thực phẩm theo tiêu chuẩn quốc tế.
                            </p>
                        </div>
                        
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3em', marginBottom: '15px' }}>🚚</div>
                            <h3 style={{ color: '#e74c3c', marginBottom: '10px' }}>Giao hàng nhanh chóng</h3>
                            <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
                                Hệ thống logistics hiện đại, giao hàng trong ngày tại TP.HCM và 2-3 ngày cho các tỉnh thành khác. Miễn phí vận chuyển cho đơn hàng trên 500k.
                            </p>
                        </div>
                        
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3em', marginBottom: '15px' }}>💰</div>
                            <h3 style={{ color: '#f39c12', marginBottom: '10px' }}>Giá cả cạnh tranh</h3>
                            <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
                                Cam kết mang đến những sản phẩm chất lượng cao với mức giá tốt nhất thị trường. Thường xuyên có các chương trình khuyến mãi hấp dẫn.
                            </p>
                        </div>
                        
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3em', marginBottom: '15px' }}>🛡️</div>
                            <h3 style={{ color: '#9b59b6', marginBottom: '10px' }}>Dịch vụ chu đáo</h3>
                            <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
                                Đội ngũ tư vấn chuyên nghiệp 24/7, chính sách đổi trả linh hoạt và hỗ trợ khách hàng tận tình trong suốt quá trình mua sắm.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '40px', borderRadius: '15px' }}>
                    <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>
                        Trải nghiệm mua sắm trực tuyến tuyệt vời
                    </h2>
                    <p style={{ fontSize: '1.2em', lineHeight: '1.8', marginBottom: '20px', maxWidth: '800px', margin: '0 auto' }}>
                        Với giao diện thân thiện, dễ sử dụng và hệ thống thanh toán an toàn, Nông sản Việt Nam mang đến cho bạn trải nghiệm mua sắm online thuận tiện và đáng tin cậy. Hãy khám phá hàng ngàn sản phẩm chất lượng và đặt hàng ngay hôm nay!
                    </p>
                </div>
                
                {/* Additional Hidden SEO Content */}
                <div style={{ display: 'none' }} className="seo-content-homepage-extended">
                    <h2>Thực phẩm nhập khẩu chất lượng cao từ khắp thế giới</h2>
                    <p>Nông sản Việt Nam tự hào là điểm đến tin cậy cho những ai yêu thích thực phẩm chất lượng cao. Chúng tôi không ngừng tìm kiếm và mang về Việt Nam những sản phẩm thực phẩm tốt nhất từ các quốc gia nổi tiếng về ẩm thực như Nhật Bản, Hàn Quốc, Ý, Pháp, Úc, New Zealand, Mỹ và nhiều nước khác.</p>
                    
                    <h3>Cam kết chất lượng và an toàn thực phẩm</h3>
                    <p>Tất cả sản phẩm tại Nông sản Việt Nam đều được kiểm tra nghiêm ngặt về chất lượng, nguồn gốc xuất xứ và đảm bảo an toàn thực phẩm theo các tiêu chuẩn quốc tế. Chúng tôi chỉ hợp tác với những nhà cung cấp uy tín, có giấy phép kinh doanh hợp lệ và cam kết về chất lượng sản phẩm.</p>
                    
                    <h3>Đa dạng về danh mục sản phẩm</h3>
                    <p>Kho hàng của chúng tôi bao gồm đầy đủ các loại thực phẩm từ thực phẩm tươi sống như thịt bò Wagyu Nhật Bản, hải sản tươi từ Na Uy, trái cây nhiệt đới từ Thái Lan cho đến các sản phẩm chế biến sẵn như pasta Ý, chocolate Thụy Sĩ, phô mai Pháp, rượu vang Chile và Argentina.</p>
                    
                    <h3>Dịch vụ khách hàng chuyên nghiệp</h3>
                    <p>Đội ngũ chăm sóc khách hàng của Nông sản Việt Nam làm việc 24/7 để hỗ trợ quý khách trong mọi nhu cầu mua sắm. Từ tư vấn sản phẩm, hướng dẫn sử dụng cho đến giải quyết các vấn đề phát sinh, chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ một cách tận tình nhất.</p>
                    
                    <h3>Hệ thống giao hàng tiên tiến</h3>
                    <p>Với hệ thống cold chain hiện đại, chúng tôi đảm bảo sản phẩm được bảo quản ở nhiệt độ phù hợp suốt quá trình vận chuyển. Đặc biệt đối với thực phẩm tươi sống và đông lạnh, chúng tôi sử dụng xe tải lạnh chuyên dụng và bao bì cách nhiệt chất lượng cao để duy trì độ tươi ngon tốt nhất.</p>
                    
                    <h3>Chương trình khuyến mãi hấp dẫn</h3>
                    <p>Nông sản Việt Nam thường xuyên tổ chức các chương trình khuyến mãi, giảm giá đặc biệt cho khách hàng. Từ giảm giá theo mùa, khuyến mãi khai trương sản phẩm mới đến chương trình tích điểm đổi quà, chúng tôi luôn mang đến những ưu đãi tốt nhất cho khách hàng thân thiết.</p>
                    
                    <h3>Thanh toán an toàn và tiện lợi</h3>
                    <p>Hỗ trợ đa dạng các phương thức thanh toán từ tiền mặt khi nhận hàng (COD), chuyển khoản ngân hàng, thẻ tín dụng quốc tế đến các ví điện tử phổ biến như MoMo, VNPay, ZaloPay. Tất cả giao dịch đều được bảo mật tối đa bằng công nghệ mã hóa SSL hiện đại.</p>
                    
                    <h3>Cộng đồng yêu thực phẩm chất lượng</h3>
                    <p>Tham gia cộng đồng khách hàng của Nông sản Việt Nam để chia sẻ kinh nghiệm nấu nướng, công thức món ăn độc đáo và nhận những thông tin hữu ích về dinh dưỡng. Chúng tôi thường xuyên tổ chức các workshop, lớp học nấu ăn và sự kiện trải nghiệm sản phẩm mới.</p>
                </div>
            </div>
            
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