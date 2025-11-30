import React from 'react';
import Login from '../components/login/Login';
import { Helmet } from 'react-helmet-async';

function LoginPage(props) {
    return (
        <div>
            <Helmet>
                <title>Đăng nhập - Thực phẩm nhập khẩu cao cấp</title>
                <meta name="description" content="Đăng nhập vào tài khoản để mua sắm thực phẩm nhập khẩu chất lượng cao. Trải nghiệm mua sắm an toàn, tiện lợi với nhiều ưu đãi độc quyền." />
            </Helmet>
            
            {/* SEO Content Block */}
            <div style={{ padding: '20px 0', maxWidth: '1200px', margin: '0 auto', display: 'none' }} className="seo-content-login">
                <h1>Đăng nhập tài khoản thực phẩm nhập khẩu</h1>
                <p>Chào mừng quý khách đến với hệ thống mua sắm thực phẩm nhập khẩu cao cấp hàng đầu Việt Nam. Đăng nhập để trải nghiệm dịch vụ mua sắm tuyệt vời với hàng ngàn sản phẩm chất lượng từ các thương hiệu nổi tiếng thế giới.</p>
                
                <h2>Lợi ích khi đăng nhập</h2>
                <p>Tài khoản thành viên mang đến nhiều quyền lợi đặc biệt như theo dõi đơn hàng realtime, lưu trữ địa chỉ giao hàng, danh sách yêu thích và nhận thông báo về các chương trình khuyến mãi độc quyền. Hệ thống bảo mật cao cấp đảm bảo thông tin cá nhân luôn được an toàn tuyệt đối.</p>
                
                <h3>Mua sắm an toàn và tiện lợi</h3>
                <p>Với tài khoản đã đăng ký, quý khách có thể thanh toán nhanh chóng thông qua nhiều phương thức khác nhau như thẻ tín dụng, ví điện tử hoặc chuyển khoản ngân hàng. Lịch sử mua hàng được lưu trữ đầy đủ giúp quý khách dễ dàng theo dõi và tái đặt hàng.</p>
                
                <h3>Chương trình khách hàng thân thiết</h3>
                <p>Thành viên đăng ký sẽ được tích điểm với mỗi giao dịch mua sắm. Điểm tích lũy có thể sử dụng để đổi quà tặng hoặc giảm giá cho các đơn hàng tiếp theo. Khách hàng VIP còn được hưởng nhiều ưu đãi đặc biệt và dịch vụ chăm sóc ưu tiên.</p>
            </div>
            
            <Login></Login>
        </div>
    );
}

export default LoginPage;