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
      
      {/* SEO Content Section - Expanded */}
      <div style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'none' }} className="seo-content-detail-page">
          <h1>Chi tiết sản phẩm thực phẩm nhập khẩu chất lượng cao - Nông sản Việt Nam</h1>
          <p>Trang chi tiết sản phẩm của Nông sản Việt Nam cung cấp thông tin đầy đủ và chi tiết nhất về mỗi sản phẩm thực phẩm nhập khẩu. Chúng tôi cam kết minh bạch về nguồn gốc, chất lượng, giá trị dinh dưỡng và cách sử dụng sản phẩm để khách hàng có thể đưa ra quyết định mua sắm tốt nhất cho gia đình mình.</p>
          
          <h2>Thông tin sản phẩm chi tiết và minh bạch tuyệt đối</h2>
          <p>Mỗi sản phẩm trên website của chúng tôi đều được mô tả một cách chi tiết và chính xác nhất. Từ thông tin cơ bản như tên sản phẩm, thương hiệu, xuất xứ đến những thông tin chuyên sâu như thành phần dinh dưỡng, hướng dẫn sử dụng, điều kiện bảo quản và hạn sử dụng. Đội ngũ chuyên gia dinh dưỡng và thực phẩm của chúng tôi luôn kiểm tra và cập nhật thông tin một cách định kỳ.</p>
          
          <h3>Hình ảnh chất lượng cao và đa góc độ chuyên nghiệp</h3>
          <p>Chúng tôi đầu tư vào hệ thống chụp ảnh sản phẩm chuyên nghiệp với độ phân giải cao, ánh sáng chuẩn và nhiều góc độ khác nhau. Studio chụp ảnh được trang bị đầy đủ thiết bị hiện đại, ánh sáng LED chuyên dụng và máy ảnh độ phân giải cao. Khách hàng có thể xem rõ nét mọi chi tiết của sản phẩm từ bao bì, nhãn mác đến sản phẩm thực tế bên trong. Mỗi sản phẩm đều có ít nhất 8-10 hình ảnh từ các góc độ khác nhau.</p>
          
          <h3>Thông tin dinh dưỡng và thành phần đầy đủ chính xác</h3>
          <p>Bảng thành phần dinh dưỡng được dịch thuật chính xác từ ngôn ngữ gốc bởi đội ngũ dịch viên chuyên ngành thực phẩm, bao gồm lượng calo, protein, carbohydrate, chất béo, chất xơ, vitamin và khoáng chất. Chúng tôi đặc biệt chú ý đến việc ghi rõ các chất gây dị ứng như gluten, lactose, đậu phộng, hải sản và các phụ gia thực phẩm để khách hàng có thể lựa chọn phù hợp với nhu cầu sức khỏe và chế độ ăn kiêng đặc biệt.</p>
          
          <h3>Xuất xứ và nguồn gốc rõ ràng có thể truy xuất</h3>
          <p>Mỗi sản phẩm đều có thông tin rõ ràng về xuất xứ, nhà sản xuất, địa chỉ cơ sở sản xuất và các giấy tờ chứng nhận chất lượng quốc tế. Chúng tôi chỉ nhập khẩu từ những nhà cung cấp uy tín, có giấy phép kinh doanh hợp lệ và tuân thủ các tiêu chuẩn quốc tế như ISO, HACCP, FDA, CE. Hệ thống truy xuất nguồn gốc cho phép khách hàng kiểm tra lịch sử nhập khẩu và chứng nhận chất lượng của từng lô hàng.</p>
          
          <h3>Hướng dẫn sử dụng và bảo quản chi tiết chuyên nghiệp</h3>
          <p>Thông tin chi tiết về cách sử dụng sản phẩm hiệu quả nhất, liều lượng khuyến nghị hàng ngày, phương pháp chế biến tối ưu và điều kiện bảo quản để duy trì chất lượng dinh dưỡng cao nhất. Đối với mỗi loại sản phẩm, chúng tôi cung cấp hướng dẫn riêng biệt về nhiệt độ bảo quản, độ ẩm môi trường, thời gian sử dụng sau khi mở bao bì và cách nhận biết sản phẩm hết hạn.</p>
          
          <h3>Đánh giá và nhận xét chi tiết từ khách hàng thực tế</h3>
          <p>Hệ thống đánh giá và nhận xét từ khách hàng đã mua sản phẩm giúp những người mua sau có thể tham khảo kinh nghiệm thực tế. Chúng tôi khuyến khích khách hàng chia sẻ trung thực về chất lượng, hương vị, mùi thơm, kết cấu và trải nghiệm sử dụng sản phẩm. Hệ thống lọc và xác thực đánh giá đảm bảo chỉ những người đã mua hàng mới có thể viết nhận xét.</p>
          
          <h3>Sản phẩm liên quan và gợi ý thông minh AI</h3>
          <p>Hệ thống gợi ý sản phẩm thông minh sử dụng công nghệ AI dựa trên sở thích, lịch sử mua sắm và hành vi duyệt web của khách hàng. Thuật toán machine learning phân tích dữ liệu để đưa ra những gợi ý chính xác nhất. Giúp khách hàng khám phá thêm những sản phẩm phù hợp, có thể kết hợp tốt hoặc thay thế cho sản phẩm đang xem.</p>
          
          <h3>Chính sách bảo hành và đổi trả linh hoạt</h3>
          <p>Thông tin rõ ràng về chính sách bảo hành, đổi trả cho từng loại sản phẩm với thời gian và điều kiện cụ thể. Đối với thực phẩm tươi sống, chúng tôi có chính sách đổi trả trong 24h nếu sản phẩm không đạt chất lượng cam kết. Sản phẩm khô và đóng hộp có thể đổi trả trong 7 ngày nếu chưa mở bao bì. Quy trình đổi trả đơn giản chỉ cần liên hệ hotline hoặc chat trực tuyến.</p>
          
          <h3>Thông tin vận chuyển và giao hàng toàn quốc</h3>
          <p>Chi tiết về phương thức vận chuyển phù hợp với từng loại sản phẩm, thời gian giao hàng dự kiến và chi phí vận chuyển minh bạch. Hệ thống giao hàng nhanh trong 2-4h tại nội thành và 24-48h tại các tỉnh thành. Đặc biệt quan trọng với yêu cầu giao hàng lạnh cho sản phẩm đông lạnh và tươi sống với xe tải chuyên dụng có hệ thống làm lạnh.</p>
          
          <h2>Công nghệ và đổi mới trong trình bày sản phẩm</h2>
          <p>Nông sản Việt Nam áp dụng công nghệ AR (Augmented Reality) cho phép khách hàng xem sản phẩm một cách sinh động và tương tác. Công nghệ 360 độ cho phép khách hàng xem sản phẩm từ mọi góc độ như đang cầm trên tay. Hệ thống zoom chi tiết giúp xem rõ từng thành phần, nhãn mác và thông tin in trên bao bì.</p>
          
          <h3>Video giới thiệu và hướng dẫn sử dụng</h3>
          <p>Mỗi sản phẩm đều có video giới thiệu chất lượng HD với thời lượng 2-5 phút, được quay bởi đội ngũ chuyên nghiệp. Video bao gồm cận cảnh sản phẩm, hướng dẫn mở bao bì, cách sử dụng và các mẹo bảo quản từ chuyên gia. Đặc biệt có video nấu ăn và chế biến cho các sản phẩm nguyên liệu.</p>
          
          <h3>Thông tin dinh dưỡng và lợi ích sức khỏe</h3>
          <p>Phân tích chi tiết về giá trị dinh dưỡng và lợi ích sức khỏe của từng sản phẩm được thực hiện bởi đội ngũ chuyên gia dinh dưỡng có chứng chỉ quốc tế. Thông tin về tác dụng với các bệnh lý phổ biến, phù hợp với lứa tuổi nào, có thể kết hợp với thực phẩm nào để tăng hiệu quả hấp thụ dinh dưỡng.</p>
          
          <h3>Công thức và cách chế biến đa dạng</h3>
          <p>Cung cấp nhiều công thức nấu ăn và cách chế biến khác nhau cho mỗi sản phẩm, từ món truyền thống đến fusion hiện đại. Mỗi công thức đều có hướng dẫn chi tiết từng bước kèm hình ảnh minh họa. Đặc biệt có thông tin về thời gian chuẩn bị, nấu nướng và số người ăn cho mỗi công thức.</p>
          
          <h2>Hệ thống chăm sóc khách hàng tận tâm</h2>
          <p>Đội ngũ chăm sóc khách hàng được đào tạo chuyên sâu về sản phẩm và dinh dưỡng, sẵn sàng tư vấn 24/7 qua hotline, chat trực tuyến, email và mạng xã hội. Thời gian phản hồi trung bình dưới 30 giây cho chat và dưới 2 phút cho điện thoại. Hỗ trợ đa ngôn ngữ bao gồm tiếng Việt, tiếng Anh và tiếng Trung.</p>
          
          <h3>Tư vấn dinh dưỡng chuyên nghiệp miễn phí</h3>
          <p>Dịch vụ tư vấn dinh dưỡng miễn phí từ các chuyên gia có bằng cấp chuyên môn. Khách hàng có thể đặt lịch tư vấn trực tiếp hoặc tư vấn online để lựa chọn sản phẩm phù hợp với nhu cầu sức khỏe, chế độ ăn kiêng và mục tiêu dinh dưỡng cá nhân. Dịch vụ bao gồm lập kế hoạch dinh dưỡng và theo dõi tiến độ.</p>
          
          <h3>Chương trình khuyến mãi và tích điểm</h3>
          <p>Hệ thống tích điểm thông minh với mỗi đồng mua hàng sẽ được tích điểm tương ứng. Điểm tích lũy có thể quy đổi thành voucher giảm giá, sản phẩm miễn phí hoặc các dịch vụ cao cấp. Chương trình khuyến mãi đa dạng theo mùa, lễ tết với mức giảm giá hấp dẫn lên đến 50%.</p>
          
          <h2>Cam kết chất lượng và trách nhiệm xã hội</h2>
          <p>Nông sản Việt Nam cam kết mang đến cho khách hàng những sản phẩm chất lượng cao nhất cùng với dịch vụ hoàn hảo. Mọi sản phẩm đều được kiểm tra kỹ lưỡng bởi đội ngũ chuyên gia chất lượng trước khi giao đến tay khách hàng. Chúng tôi có phòng kiểm nghiệm riêng với trang thiết bị hiện đại để đảm bảo chất lượng và an toàn thực phẩm.</p>
          
          <h3>Trách nhiệm với môi trường và cộng đồng</h3>
          <p>Chúng tôi ưu tiên các nhà cung cấp có trách nhiệm với môi trường, sử dụng bao bì tái chế và quy trình sản xuất bền vững. Tham gia các chương trình xã hội như hỗ trợ nông dân, giáo dục dinh dưỡng cho trẻ em và các hoạt động từ thiện. 10% lợi nhuận hàng năm được dành cho các hoạt động xã hội và bảo vệ môi trường.</p>
          
          <h3>Đảm bảo an toàn thực phẩm tuyệt đối</h3>
          <p>Hệ thống quản lý chất lượng theo tiêu chuẩn ISO 22000 và HACCP đảm bảo an toàn thực phẩm từ khâu nhập khẩu đến giao hàng. Kho bảo quản hiện đại với hệ thống kiểm soát nhiệt độ, độ ẩm tự động và camera giám sát 24/7. Định kỳ kiểm tra chất lượng bởi các cơ quan chức năng và tổ chức kiểm định độc lập.</p>
        </div>
      </div>
      
      <Detail></Detail>
      {userInfo ? <AppChat></AppChat> : ""}
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default DetailPage;
