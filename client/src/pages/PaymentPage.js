import React from 'react';
import Payment from '../components/order/Payment';
import { Helmet } from 'react-helmet-async';

export default function PaymentPage() {
    return (
        <div>
            <Helmet>
                <title>Thanh toán - Thực phẩm nhập khẩu cao cấp</title>
                <meta name="description" content="Thanh toán an toàn cho đơn hàng thực phẩm nhập khẩu. Hỗ trợ nhiều phương thức thanh toán tiện lợi và bảo mật cao." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            
            {/* SEO Content Block */}
            <div style={{ padding: '20px 0', maxWidth: '1200px', margin: '0 auto', display: 'none' }} className="seo-content-payment">
                <h1>Thanh toán an toàn cho thực phẩm nhập khẩu</h1>
                <p>Chúng tôi cung cấp hệ thống thanh toán đa dạng và an toàn nhất cho quý khách. Mọi giao dịch đều được đảm bảo bảo mật tối đa bằng công nghệ mã hóa hiện đại nhất.</p>
                
                <h2>Các phương thức thanh toán hỗ trợ</h2>
                <p>Hệ thống hỗ trợ đầy đủ các phương thức thanh toán phổ biến tại Việt Nam bao gồm thanh toán trực tuyến, chuyển khoản ngân hàng, ví điện tử và thanh toán khi nhận hàng. Quý khách có thể lựa chọn phương thức phù hợp nhất với mình.</p>
                
                <h3>Thanh toán thẻ tín dụng quốc tế</h3>
                <p>Chấp nhận tất cả các loại thẻ tín dụng và thẻ ghi nợ của Visa, MasterCard, JCB, American Express. Giao dịch được xử lý ngay lập tức và bảo mật theo tiêu chuẩn PCI DSS quốc tế.</p>
                
                <h3>Ví điện tử và mobile banking</h3>
                <p>Hỗ trợ thanh toán qua các ví điện tử phổ biến như MoMo, VNPay, ZaloPay và các ứng dụng mobile banking của các ngân hàng lớn. Thanh toán nhanh chóng chỉ với vài thao tác đơn giản.</p>
                
                <h3>Thanh toán khi nhận hàng (COD)</h3>
                <p>Dành cho khách hàng muốn kiểm tra sản phẩm trước khi thanh toán. Phí COD chỉ từ 15,000đ - 30,000đ tùy theo giá trị đơn hàng. Áp dụng cho đơn hàng dưới 5 triệu đồng.</p>
                
                <h2>Bảo mật thông tin thanh toán</h2>
                <p>Mọi thông tin thanh toán đều được mã hóa SSL 256-bit và không được lưu trữ trên hệ thống của chúng tôi. Chúng tôi tuân thủ nghiêm ngặt các quy định bảo mật thanh toán quốc tế để đảm bảo an toàn tuyệt đối cho khách hàng.</p>
            </div>
            
            <Payment></Payment>
        </div>
    );
}
