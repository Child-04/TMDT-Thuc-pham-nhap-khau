import React from 'react';
import Signup from '../components/Signup/Signup';
import { Helmet } from 'react-helmet-async';

function SignupPage(props) {
    return (
        <div>
            <Helmet>
                <title>Đăng ký tài khoản - Thực phẩm nhập khẩu cao cấp</title>
                <meta name="description" content="Đăng ký tài khoản để trải nghiệm mua sắm thực phẩm nhập khẩu chất lượng cao. Nhận ưu đãi độc quyền, tích điểm và dịch vụ chăm sóc khách hàng 24/7." />
            </Helmet>
            
            {/* SEO Content Block */}
            <div style={{ padding: '20px 0', maxWidth: '1200px', margin: '0 auto', display: 'none' }} className="seo-content-signup">
                <h1>Đăng ký thành viên thực phẩm nhập khẩu</h1>
                <p>Gia nhập cộng đồng những người yêu thực phẩm chất lượng cao tại Việt Nam. Đăng ký tài khoản ngay hôm nay để được trải nghiệm dịch vụ mua sắm thực phẩm nhập khẩu tốt nhất với hàng ngàn sản phẩm chất lượng từ khắp thế giới.</p>
                
                <h2>Quyền lợi thành viên độc quyền</h2>
                <p>Thành viên đăng ký sẽ được hưởng nhiều quyền lợi hấp dẫn như giảm giá đặc biệt cho đơn hàng đầu tiên, nhận thông báo sớm về các sản phẩm mới và chương trình khuyến mãi hấp dẫn. Hệ thống tích điểm thưởng giúp bạn tiết kiệm chi phí cho những lần mua sắm tiếp theo.</p>
                
                <h3>Dịch vụ khách hàng chuyên nghiệp</h3>
                <p>Đội ngũ tư vấn chuyên nghiệp về thực phẩm sẵn sàng hỗ trợ bạn lựa chọn sản phẩm phù hợp với nhu cầu và ngân sách. Dịch vụ chăm sóc khách hàng 24/7 đảm bảo mọi thắc mắc của bạn được giải đáp nhanh chóng và chính xác.</p>
                
                <h3>Giao hàng miễn phí và nhanh chóng</h3>
                <p>Thành viên VIP được hưởng dịch vụ giao hàng miễn phí cho các đơn hàng trên một giá trị nhất định. Chúng tôi cam kết giao hàng nhanh chóng trong vòng 24-48 giờ ở khu vực nội thành và 2-3 ngày ở các tỉnh thành khác.</p>
                
                <h2>An toàn và bảo mật thông tin</h2>
                <p>Chúng tôi áp dụng công nghệ bảo mật tiên tiến nhất để bảo vệ thông tin cá nhân của khách hàng. Mọi giao dịch đều được mã hóa SSL 256-bit đảm bảo an toàn tuyệt đối. Thông tin cá nhân của bạn sẽ không bao giờ được chia sẻ với bên thứ ba không được phép.</p>
            </div>
            
            <Signup></Signup>
        </div>
    );
}

export default SignupPage;