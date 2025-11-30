import React from 'react';
import PropTypes from 'prop-types';
import Order from '../components/order/Order';
import { useSelector } from 'react-redux';
import Alert from '../components/Alert/Alert';
import { Helmet } from 'react-helmet-async';

OrderPage.propTypes = {
    
};

function OrderPage(props) {
    return (
        <div>
            <Helmet>
                <title>Đặt hàng - Thực phẩm nhập khẩu cao cấp</title>
                <meta name="description" content="Hoàn tất đặt hàng thực phẩm nhập khẩu chất lượng cao. Xác nhận thông tin giao hàng và lựa chọn phương thức thanh toán phù hợp." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            
            {/* SEO Content Block */}
            <div style={{ padding: '20px 0', maxWidth: '1200px', margin: '0 auto', display: 'none' }} className="seo-content-order">
                <h1>Đặt hàng thực phẩm nhập khẩu chất lượng</h1>
                <p>Quý khách đang trong bước cuối cùng để hoàn tất việc mua sắm những sản phẩm thực phẩm nhập khẩu chất lượng cao. Chúng tôi cam kết mang đến cho quý khách trải nghiệm mua sắm an toàn, tiện lợi và hoàn toàn hài lòng.</p>
                
                <h2>Xác nhận thông tin giao hàng</h2>
                <p>Vui lòng kiểm tra kỹ thông tin địa chỉ giao hàng để đảm bảo sản phẩm được giao đến đúng nơi mong muốn. Đội ngũ giao hàng chuyên nghiệp của chúng tôi sẽ liên hệ trước khi giao hàng để xác nhận thời gian phù hợp nhất.</p>
                
                <h3>Dịch vụ giao hàng chuyên nghiệp</h3>
                <p>Tất cả sản phẩm thực phẩm đều được đóng gói cẩn thận theo tiêu chuẩn quốc tế. Đặc biệt, thực phẩm tươi sống và đông lạnh được bảo quản trong hệ thống lạnh chuyên dụng suốt quá trình vận chuyển để đảm bảo chất lượng tối ưu.</p>
                
                <h3>Thời gian giao hàng linh hoạt</h3>
                <p>Chúng tôi cung cấp dịch vụ giao hàng linh hoạt từ 8:00 sáng đến 20:00 tối, kể cả cuối tuần. Quý khách có thể lựa chọn khung giờ giao hàng phù hợp nhất hoặc để lại ghi chú đặc biệt cho nhân viên giao hàng.</p>
                
                <h2>Các phương thức thanh toán đa dạng</h2>
                <p>Hệ thống hỗ trợ nhiều phương thức thanh toán tiện lợi từ thanh toán trực tuyến bằng thẻ tín dụng, thẻ ghi nợ, ví điện tử đến thanh toán khi nhận hàng (COD). Mọi phương thức thanh toán đều được bảo mật tối đa và xử lý nhanh chóng.</p>
            </div>
            
            <Order></Order>
        </div>
    );
}

export default OrderPage;