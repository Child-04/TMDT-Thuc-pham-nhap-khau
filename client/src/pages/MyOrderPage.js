import React from 'react';
import Header from '../components/header/Header';
import MyOrder from '../components/MyOrder/MyOrder';
import { Helmet } from 'react-helmet-async';

function MyOrderPage(props) {
    return (
        <div>
            <Helmet>
                <title>Đơn hàng của tôi - Thực phẩm nhập khẩu cao cấp</title>
                <meta name="description" content="Theo dõi tình trạng đơn hàng thực phẩm nhập khẩu. Xem lịch sử mua hàng, trạng thái giao hàng và quản lý thông tin đơn hàng." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            
           <Header></Header>
           
           {/* SEO Content Block */}
           <div style={{ padding: '20px 0', maxWidth: '1200px', margin: '0 auto', display: 'none' }} className="seo-content-myorder">
               <h1>Quản lý đơn hàng thực phẩm nhập khẩu</h1>
               <p>Trang quản lý đơn hàng giúp quý khách theo dõi chi tiết mọi đơn hàng thực phẩm nhập khẩu từ khi đặt hàng đến khi nhận hàng hoàn tất. Tất cả thông tin được cập nhật realtime để quý khách luôn nắm bắt được tình trạng đơn hàng.</p>
               
               <h2>Theo dõi đơn hàng realtime</h2>
               <p>Hệ thống theo dõi đơn hàng hiện đại cho phép quý khách xem chi tiết mọi bước trong quá trình xử lý đơn hàng. Từ khi xác nhận đơn hàng, chuẩn bị hàng, đóng gói, giao cho đơn vị vận chuyển đến khi hàng được giao thành công.</p>
               
               <h3>Phân loại đơn hàng theo trạng thái</h3>
               <p>Đơn hàng được phân loại rõ ràng theo các trạng thái: đang chờ xử lý, đang chuẩn bị, đang giao hàng, đã giao thành công và đã hủy. Quý khách có thể dễ dàng lọc và tìm kiếm đơn hàng theo trạng thái mong muốn.</p>
               
               <h3>Lịch sử mua hàng đầy đủ</h3>
               <p>Xem lại toàn bộ lịch sử mua sắm thực phẩm nhập khẩu với thông tin chi tiết về sản phẩm, số lượng, giá cả và thời gian đặt hàng. Tính năng tại lại đơn hàng giúp quý khách dễ dàng đặt lại những sản phẩm yêu thích.</p>
               
               <h2>Hỗ trợ khách hàng chuyên nghiệp</h2>
               <p>Nếu có bất kỳ thắc mắc nào về đơn hàng, quý khách có thể liên hệ trực tiếp với đội ngũ chăm sóc khách hàng 24/7 qua hotline, email hoặc chat trực tuyến. Chúng tôi cam kết giải quyết mọi vấn đề nhanh chóng và hiệu quả.</p>
           </div> 
           
           <MyOrder></MyOrder>
        </div>
    );
}

export default MyOrderPage;