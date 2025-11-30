import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/header/Header";
import Detail from "../components/detail/Detail";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import AppChat from "../components/AppChat/AppChat";
import { useSelector } from "react-redux";

function DetailPage(props) {
  const { userInfo } = useSelector((state) => state.userSignin);
  return (
    <div>
      <Helmet>
        <title>Chi tiết sản phẩm - Nông sản Việt Nam | Thực phẩm nhập khẩu chất lượng</title>
        <meta name="description" content="Xem chi tiết sản phẩm thực phẩm nhập khẩu chất lượng cao. Thông tin đầy đủ về nguồn gốc, dinh dưỡng, cách sử dụng và đánh giá từ khách hàng." />
        <meta name="keywords" content="chi tiết sản phẩm, thực phẩm nhập khẩu, chất lượng, đánh giá, nguồn gốc, dinh dưỡng" />
      </Helmet>
      
      <Header></Header>
      
      {/* SEO Content Section */}
      <div style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'none' }} className="seo-content-detail-page">
          <h1>Chi tiết sản phẩm thực phẩm nhập khẩu chất lượng cao</h1>
          <p>Trang chi tiết sản phẩm của Nông sản Việt Nam cung cấp thông tin đầy đủ và chi tiết nhất về mỗi sản phẩm thực phẩm nhập khẩu. Chúng tôi cam kết minh bạch về nguồn gốc, chất lượng, giá trị dinh dưỡng và cách sử dụng sản phẩm để khách hàng có thể đưa ra quyết định mua sắm tốt nhất.</p>
          
          <h2>Thông tin sản phẩm chi tiết và minh bạch</h2>
          <p>Mỗi sản phẩm trên website của chúng tôi đều được mô tả một cách chi tiết và chính xác. Từ thông tin cơ bản như tên sản phẩm, thương hiệu, xuất xứ đến những thông tin chuyên sâu như thành phần dinh dưỡng, hướng dẫn sử dụng, điều kiện bảo quản và hạn sử dụng.</p>
          
          <h3>Hình ảnh chất lượng cao và đa góc độ</h3>
          <p>Chúng tôi đầu tư vào hệ thống chụp ảnh sản phẩm chuyên nghiệp với độ phân giải cao, ánh sáng chuẩn và nhiều góc độ khác nhau. Khách hàng có thể xem rõ nét mọi chi tiết của sản phẩm từ bao bì, nhãn mác đến sản phẩm thực tế bên trong.</p>
          
          <h3>Thông tin dinh dưỡng và thành phần</h3>
          <p>Bảng thành phần dinh dưỡng được dịch thuật chính xác từ ngôn ngữ gốc, bao gồm lượng calo, protein, carbohydrate, chất béo, vitamin và khoáng chất. Đặc biệt lưu ý về các chất gây dị ứng và phụ gia thực phẩm để khách hàng có thể lựa chọn phù hợp với nhu cầu sức khỏe.</p>
          
          <h3>Xuất xứ và nguồn gốc rõ ràng</h3>
          <p>Mỗi sản phẩm đều có thông tin rõ ràng về xuất xứ, nhà sản xuất, địa chỉ cơ sở sản xuất và các giấy tờ chứng nhận chất lượng. Chúng tôi chỉ nhập khẩu từ những nhà cung cấp uy tín, có giấy phép kinh doanh hợp lệ và tuân thủ các tiêu chuẩn quốc tế.</p>
          
          <h3>Hướng dẫn sử dụng và bảo quản</h3>
          <p>Thông tin chi tiết về cách sử dụng sản phẩm hiệu quả nhất, liều lượng khuyến nghị, cách chế biến và bảo quản để duy trì chất lượng tốt nhất. Đặc biệt quan trọng đối với các sản phẩm tươi sống và có yêu cầu bảo quản đặc biệt.</p>
          
          <h3>Đánh giá và nhận xét từ khách hàng</h3>
          <p>Hệ thống đánh giá và nhận xét từ khách hàng đã mua sản phẩm giúp những người mua sau có thể tham khảo kinh nghiệm thực tế. Chúng tôi khuyến khích khách hàng chia sẻ trung thực về chất lượng, hương vị và trải nghiệm sử dụng sản phẩm.</p>
          
          <h3>Sản phẩm liên quan và gợi ý</h3>
          <p>Hệ thống gợi ý sản phẩm thông minh dựa trên sở thích và lịch sử mua sắm của khách hàng. Giúp khách hàng khám phá thêm những sản phẩm phù hợp và có thể kết hợp tốt với sản phẩm đang xem.</p>
          
          <h3>Chính sách bảo hành và đổi trả</h3>
          <p>Thông tin rõ ràng về chính sách bảo hành, đổi trả cho từng loại sản phẩm. Đối với thực phẩm tươi sống, chúng tôi có chính sách đặc biệt về thời gian đổi trả và điều kiện bảo quản để đảm bảo quyền lợi khách hàng.</p>
          
          <h3>Thông tin vận chuyển và giao hàng</h3>
          <p>Chi tiết về phương thức vận chuyển phù hợp với từng loại sản phẩm, thời gian giao hàng dự kiến và chi phí vận chuyển. Đặc biệt lưu ý về yêu cầu giao hàng lạnh cho sản phẩm đông lạnh và tươi sống.</p>
          
          <h2>Cam kết chất lượng và dịch vụ</h2>
          <p>Nông sản Việt Nam cam kết mang đến cho khách hàng những sản phẩm chất lượng cao nhất cùng với dịch vụ hoàn hảo. Mọi sản phẩm đều được kiểm tra kỹ lưỡng trước khi giao đến tay khách hàng và chúng tôi sẵn sàng hỗ trợ 24/7 cho mọi nhu cầu tư vấn và chăm sóc khách hàng.</p>
        </div>
      </div>
      
      <Detail></Detail>
      {userInfo ? <AppChat></AppChat> : ""}
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default DetailPage;
