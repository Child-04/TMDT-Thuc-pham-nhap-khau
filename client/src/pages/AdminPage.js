import React from "react";
import Admin from "../components/Admin/Admin";
import { Helmet } from "react-helmet-async";

function AdminPage(props) {
  return (
    <div>
      <Helmet>
        <title>Quản trị hệ thống - Thực phẩm nhập khẩu cao cấp</title>
        <meta name="description" content="Trang quản trị toàn diện cho hệ thống bán hàng thực phẩm nhập khẩu. Quản lý sản phẩm, đơn hàng, khách hàng và thống kê doanh thu hiệu quả." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      {/* SEO Content Block */}
      <div style={{ padding: '20px 0', maxWidth: '1200px', margin: '0 auto', display: 'none' }} className="seo-content-admin">
        <h1>Hệ thống quản trị thực phẩm nhập khẩu chuyên nghiệp</h1>
        <p>Chào mừng đến với trang quản trị toàn diện dành cho hệ thống thương mại điện tử chuyên về thực phẩm nhập khẩu cao cấp. Đây là nền tảng quản lý tập trung giúp bạn kiểm soát mọi hoạt động kinh doanh từ quản lý kho hàng đến phục vụ khách hàng.</p>
        
        <h2>Tính năng quản trị nổi bật</h2>
        <p>Hệ thống quản trị của chúng tôi được thiết kế để đáp ứng nhu cầu quản lý phức tạp của ngành thực phẩm nhập khẩu. Với giao diện trực quan và tính năng đa dạng, bạn có thể dễ dàng theo dõi và điều hành mọi khía cạnh của doanh nghiệp.</p>
        
        <h3>Quản lý sản phẩm thông minh</h3>
        <p>Theo dõi chi tiết từng sản phẩm thực phẩm nhập khẩu trong kho. Cập nhật thông tin dinh dưỡng, xuất xứ, hạn sử dụng và giá cả một cách nhanh chóng. Hệ thống hỗ trợ phân loại sản phẩm theo nhiều tiêu chí khác nhau như loại thực phẩm, thương hiệu, xuất xứ và tình trạng kho.</p>
        
        <h3>Xử lý đơn hàng hiệu quả</h3>
        <p>Quản lý quy trình xử lý đơn hàng từ lúc nhận đặt hàng đến giao hàng thành công. Theo dõi trạng thái đơn hàng realtime, xử lý thanh toán và phối hợp với đối tác vận chuyển. Tính năng thông báo tự động giúp khách hàng luôn được cập nhật tình trạng đơn hàng.</p>
        
        <h3>Quản lý khách hàng chuyên nghiệp</h3>
        <p>Xây dựng cơ sở dữ liệu khách hàng đầy đủ với thông tin liên hệ, lịch sử mua hàng và sở thích cá nhân. Phân khúc khách hàng theo hành vi mua sắm để tạo ra những chiến dịch marketing được cá nhân hóa và hiệu quả.</p>
        
        <h3>Thống kê và báo cáo chi tiết</h3>
        <p>Theo dõi các chỉ số kinh doanh quan trọng như doanh thu, lợi nhuận, sản phẩm bán chạy và xu hướng mua sắm của khách hàng. Báo cáo được cập nhật realtime giúp bạn đưa ra quyết định kinh doanh kịp thời và chính xác.</p>
        
        <h2>Bảo mật và tuân thủ quy định</h2>
        <p>An toàn thông tin là ưu tiên hàng đầu trong hệ thống quản trị. Chúng tôi áp dụng các biện pháp bảo mật tiên tiến nhất để bảo vệ dữ liệu doanh nghiệp và thông tin khách hàng. Hệ thống tuân thủ đầy đủ các quy định về an toàn thực phẩm và thương mại điện tử.</p>
        
        <h2>Hỗ trợ đa nền tảng</h2>
        <p>Truy cập hệ thống quản trị mọi lúc mọi nôi thông qua giao diện web responsive hoặc ứng dụng mobile chuyên dụng. Đồng bộ dữ liệu realtime đảm bảo bạn luôn có thông tin cập nhật nhất để điều hành kinh doanh hiệu quả.</p>
      </div>
      
      <Admin></Admin>
    </div>
  );
}

export default AdminPage;
