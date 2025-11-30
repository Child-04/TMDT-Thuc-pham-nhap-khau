import React from 'react';
import Cart from '../components/ShoppingCart/Cart';
import { Helmet } from 'react-helmet-async';

function CartPage(props) {
    return (
        <div>
            <Helmet>
                <title>Giỏ hàng - Thực phẩm nhập khẩu cao cấp</title>
                <meta name="description" content="Xem lại giỏ hàng và hoàn tất đặt mua thực phẩm nhập khẩu chất lượng. Thanh toán an toàn, giao hàng nhanh chóng trên toàn quốc." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            
            {/* SEO Content Block */}
            <div style={{ padding: '20px 0', maxWidth: '1200px', margin: '0 auto', display: 'none' }} className="seo-content-cart">
                <h1>Giỏ hàng thực phẩm nhập khẩu cao cấp</h1>
                <p>Quý khách đang xem lại những sản phẩm thực phẩm nhập khẩu chất lượng cao đã chọn. Mỗi sản phẩm trong giỏ hàng đều được chúng tôi tuyển chọn kỹ lưỡng từ các nhà cung cấp uy tín trên thế giới, đảm bảo chất lượng và an toàn thực phẩm tuyệt đối.</p>
                
                <h2>Quy trình thanh toán đơn giản</h2>
                <p>Hệ thống thanh toán được thiết kế thân thiện và bảo mật cao. Quý khách có thể lựa chọn nhiều phương thức thanh toán linh hoạt từ thẻ tín dụng quốc tế, ví điện tử đến chuyển khoản ngân hàng. Mọi giao dịch đều được mã hóa SSL để đảm bảo thông tin tài chính luôn an toàn.</p>
                
                <h3>Chính sách giao hàng tận nơi</h3>
                <p>Chúng tôi hợp tác với các đơn vị vận chuyển hàng đầu để đảm bảo sản phẩm được giao đến tay quý khách trong tình trạng tươi ngon nhất. Đối với thực phẩm đông lạnh và thực phẩm tươi sống, chúng tôi sử dụng hệ thống cold chain chuyên nghiệp duy trì nhiệt độ ổn định suốt quá trình vận chuyển.</p>
                
                <h3>Chính sách đổi trả linh hoạt</h3>
                <p>Nếu không hài lòng với sản phẩm nhận được, quý khách có thể yêu cầu đổi trả trong vòng 7 ngày kể từ ngày nhận hàng. Đội ngũ chăm sóc khách hàng 24/7 sẵn sàng hỗ trợ giải quyết mọi vấn đề một cách nhanh chóng và thoả đáng.</p>
                
                <h2>Cam kết chất lượng</h2>
                <p>Mọi sản phẩm thực phẩm nhập khẩu đều có đầy đủ giấy tờ chứng nhận chất lượng, xuất xứ rõ ràng và được kiểm định nghiêm ngặt bởi các cơ quan có thẩm quyền. Chúng tôi cam kết mang đến cho gia đình Việt những sản phẩm thực phẩm an toàn, bổ dưỡng và ngon miệng nhất.</p>
            </div>
            
            <Cart></Cart>
        </div>
    );
}

export default CartPage;