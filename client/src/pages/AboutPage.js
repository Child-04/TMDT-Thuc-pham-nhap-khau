import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>Giới thiệu - Nông sản Việt Nam | Thực phẩm nhập khẩu chất lượng cao</title>
        <meta name="description" content="Tìm hiểu về Nông sản Việt Nam - đơn vị hàng đầu cung cấp thực phẩm nhập khẩu chất lượng cao tại Việt Nam. Cam kết chất lượng, giá cả cạnh tranh và dịch vụ tốt nhất." />
        <meta name="keywords" content="giới thiệu nông sản việt nam, thực phẩm nhập khẩu, chất lượng cao, an toàn thực phẩm, doanh nghiệp uy tín" />
        <link rel="canonical" href="https://tmdt-thuc-pham-nhap-khau-client.onrender.com/about" />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Nông sản Việt Nam",
              "description": "Công ty hàng đầu trong lĩnh vực cung cấp thực phẩm nhập khẩu chất lượng cao tại Việt Nam",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Đường ABC",
                "addressLocality": "Hồ Chí Minh",
                "addressCountry": "VN"
              }
            }
          }`}
        </script>
      </Helmet>

      <Header />
      
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', lineHeight: '1.8' }}>
        <article>
          <header style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '2.5em', color: '#2c3e50', marginBottom: '20px' }}>
              Giới thiệu về Nông sản Việt Nam
            </h1>
            <p style={{ fontSize: '1.2em', color: '#7f8c8d' }}>
              Đối tác tin cậy trong việc cung cấp thực phẩm nhập khẩu chất lượng cao
            </p>
          </header>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2em', color: '#27ae60', marginBottom: '20px' }}>
              Câu chuyện thành lập
            </h2>
            <p style={{ marginBottom: '20px', fontSize: '1.1em' }}>
              Nông sản Việt Nam được thành lập vào năm 2020 với sứ mệnh mang đến cho người tiêu dùng Việt Nam những sản phẩm thực phẩm nhập khẩu chất lượng cao với giá cả hợp lý. Chúng tôi hiểu rằng trong thời đại hiện đại, nhu cầu về thực phẩm an toàn, dinh dưỡng và đa dạng ngày càng tăng cao.
            </p>
            <p style={{ marginBottom: '20px', fontSize: '1.1em' }}>
              Xuất phát từ niềm đam mê với ẩm thực quốc tế và mong muốn nâng cao chất lượng cuộc sống của người Việt, đội ngũ sáng lập viên đã quyết định xây dựng một nền tảng thương mại điện tử chuyên biệt về thực phẩm nhập khẩu. Với kinh nghiệm nhiều năm trong ngành xuất nhập khẩu và hiểu biết sâu sắc về thị trường trong nước, chúng tôi tự tin sẽ mang đến những sản phẩm tốt nhất cho khách hàng.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2em', color: '#27ae60', marginBottom: '20px' }}>
              Tầm nhìn và sứ mệnh
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
                <h3 style={{ color: '#e74c3c', marginBottom: '15px', fontSize: '1.5em' }}>Tầm nhìn</h3>
                <p style={{ fontSize: '1.1em' }}>
                  Trở thành nền tảng thương mại điện tử hàng đầu Việt Nam trong lĩnh vực thực phẩm nhập khẩu, góp phần nâng cao chất lượng cuộc sống và trải nghiệm ẩm thực của người tiêu dùng Việt Nam. Chúng tôi hướng tới việc xây dựng một hệ sinh thái hoàn chỉnh, từ nhập khẩu, phân phối đến giao hàng tận tay khách hàng.
                </p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
                <h3 style={{ color: '#3498db', marginBottom: '15px', fontSize: '1.5em' }}>Sứ mệnh</h3>
                <p style={{ fontSize: '1.1em' }}>
                  Mang đến cho khách hàng những sản phẩm thực phẩm nhập khẩu chất lượng cao, an toàn và giá cả hợp lý. Chúng tôi cam kết cung cấp dịch vụ tận tình, chuyên nghiệp và xây dựng niềm tin bền vững với khách hàng thông qua chất lượng sản phẩm và dịch vụ vượt trội.
                </p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2em', color: '#27ae60', marginBottom: '20px' }}>
              Sản phẩm và dịch vụ
            </h2>
            <p style={{ marginBottom: '20px', fontSize: '1.1em' }}>
              Nông sản Việt Nam tự hào cung cấp một danh mục sản phẩm đa dạng và phong phú, bao gồm:
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', marginBottom: '30px' }}>
              <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '25px', borderRadius: '10px' }}>
                <h3 style={{ marginBottom: '15px', fontSize: '1.3em' }}>🥗 Thực phẩm Organic</h3>
                <p>Các sản phẩm thực phẩm hữu cơ được chứng nhận quốc tế, đảm bảo không chất bảo quản có hại, không thuốc trừ sâu và hoàn toàn tự nhiên.</p>
              </div>
              
              <div style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', padding: '25px', borderRadius: '10px' }}>
                <h3 style={{ marginBottom: '15px', fontSize: '1.3em' }}>🍷 Đồ uống nhập khẩu</h3>
                <p>Rượu vang cao cấp, nước trái cây tự nhiên, trà và cà phê đặc biệt từ các vùng sản xuất nổi tiếng thế giới.</p>
              </div>
              
              <div style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white', padding: '25px', borderRadius: '10px' }}>
                <h3 style={{ marginBottom: '15px', fontSize: '1.3em' }}>🍫 Bánh kẹo cao cấp</h3>
                <p>Chocolate Thụy Sĩ, bánh quy Pháp, kẹo trái cây Italia và nhiều loại bánh kẹo cao cấp khác từ các thương hiệu nổi tiếng.</p>
              </div>
              
              <div style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', color: 'white', padding: '25px', borderRadius: '10px' }}>
                <h3 style={{ marginBottom: '15px', fontSize: '1.3em' }}>🌶️ Gia vị quốc tế</h3>
                <p>Gia vị Ấn Độ, thảo mộc Địa Trung Hải, sauce Nhật Bản và các gia vị đặc biệt từ khắp nơi trên thế giới.</p>
              </div>
              
              <div style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', color: 'white', padding: '25px', borderRadius: '10px' }}>
                <h3 style={{ marginBottom: '15px', fontSize: '1.3em' }}>🧀 Sản phẩm sữa</h3>
                <p>Phô mai châu Âu, bơ New Zealand, sữa chua Hy Lạp và các sản phẩm từ sữa chất lượng cao khác.</p>
              </div>
              
              <div style={{ background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', color: '#333', padding: '25px', borderRadius: '10px' }}>
                <h3 style={{ marginBottom: '15px', fontSize: '1.3em' }}>🍯 Thực phẩm chức năng</h3>
                <p>Vitamin, khoáng chất, mật ong Manuka, dầu cá Omega-3 và các sản phẩm hỗ trợ sức khỏe được chứng nhận chất lượng.</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2em', color: '#27ae60', marginBottom: '20px' }}>
              Cam kết chất lượng
            </h2>
            <p style={{ marginBottom: '20px', fontSize: '1.1em' }}>
              Chất lượng sản phẩm và dịch vụ là ưu tiên hàng đầu của Nông sản Việt Nam. Chúng tôi có quy trình kiểm soát chất lượng nghiêm ngặt:
            </p>
            
            <ul style={{ fontSize: '1.1em', lineHeight: '2', marginBottom: '30px', paddingLeft: '30px' }}>
              <li><strong>Tuyển chọn nhà cung cấp:</strong> Chỉ hợp tác với các nhà cung cấp uy tín, có chứng nhận quốc tế về chất lượng và an toàn thực phẩm.</li>
              <li><strong>Kiểm tra nguồn gốc:</strong> Mọi sản phẩm đều được kiểm tra nguồn gốc xuất xứ và có đầy đủ giấy tờ chứng nhận từ các cơ quan có thẩm quyền.</li>
              <li><strong>Bảo quản chuyên nghiệp:</strong> Hệ thống kho bảo quản hiện đại với công nghệ kiểm soát nhiệt độ và độ ẩm tự động.</li>
              <li><strong>Vận chuyển an toàn:</strong> Đối tác logistics uy tín với phương tiện chuyên dụng, đảm bảo sản phẩm không bị biến chất trong quá trình vận chuyển.</li>
              <li><strong>Kiểm tra định kỳ:</strong> Thường xuyên kiểm tra chất lượng sản phẩm tại kho và có chính sách thu hồi nhanh chóng nếu phát hiện vấn đề.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2em', color: '#27ae60', marginBottom: '20px' }}>
              Đội ngũ chuyên nghiệp
            </h2>
            <p style={{ marginBottom: '20px', fontSize: '1.1em' }}>
              Nông sản Việt Nam sở hữu đội ngũ nhân viên giàu kinh nghiệm và tận tâm với công việc. Từ bộ phận tìm kiếm sản phẩm, kiểm soát chất lượng, chăm sóc khách hàng đến logistics, tất cả đều được đào tạo bài bản và thường xuyên cập nhật kiến thức mới nhất trong ngành.
            </p>
            <p style={{ marginBottom: '20px', fontSize: '1.1em' }}>
              Đội ngũ chăm sóc khách hàng của chúng tôi hoạt động 24/7, sẵn sàng hỗ trợ khách hàng mọi lúc, mọi nơi. Chúng tôi cam kết phản hồi và giải quyết mọi thắc mắc của khách hàng trong thời gian nhanh nhất.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2em', color: '#27ae60', marginBottom: '20px' }}>
              Chính sách khách hàng
            </h2>
            
            <div style={{ background: '#ecf0f1', padding: '30px', borderRadius: '15px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
                <div>
                  <h3 style={{ color: '#e67e22', marginBottom: '15px', fontSize: '1.3em' }}>🚚 Giao hàng miễn phí</h3>
                  <p style={{ fontSize: '1.1em' }}>
                    Miễn phí giao hàng cho đơn hàng từ 500.000đ trong nội thành và 1.000.000đ cho các tỉnh thành khác.
                  </p>
                </div>
                
                <div>
                  <h3 style={{ color: '#9b59b6', marginBottom: '15px', fontSize: '1.3em' }}>↩️ Đổi trả linh hoạt</h3>
                  <p style={{ fontSize: '1.1em' }}>
                    Chính sách đổi trả trong vòng 7 ngày với sản phẩm còn nguyên seal và không ảnh hưởng đến chất lượng.
                  </p>
                </div>
                
                <div>
                  <h3 style={{ color: '#1abc9c', marginBottom: '15px', fontSize: '1.3em' }}>💳 Thanh toán đa dạng</h3>
                  <p style={{ fontSize: '1.1em' }}>
                    Hỗ trợ thanh toán qua thẻ tín dụng, ví điện tử, chuyển khoản ngân hàng và COD.
                  </p>
                </div>
                
                <div>
                  <h3 style={{ color: '#34495e', marginBottom: '15px', fontSize: '1.3em' }}>🛡️ Bảo hành chất lượng</h3>
                  <p style={{ fontSize: '1.1em' }}>
                    Cam kết hoàn tiền 100% nếu sản phẩm không đúng chất lượng như mô tả.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2em', color: '#27ae60', marginBottom: '20px' }}>
              Thành tích và giải thường
            </h2>
            <p style={{ marginBottom: '20px', fontSize: '1.1em' }}>
              Trong suốt hành trình phát triển, Nông sản Việt Nam đã nhận được nhiều sự ghi nhận từ khách hàng và các tổ chức uy tín:
            </p>
            
            <ul style={{ fontSize: '1.1em', lineHeight: '2', marginBottom: '20px', paddingLeft: '30px' }}>
              <li>Top 10 doanh nghiệp xuất sắc trong lĩnh vực thương mại điện tử 2023</li>
              <li>Giải thưởng "Thương hiệu tin cậy" từ Hiệp hội Thương mại điện tử Việt Nam</li>
              <li>Chứng nhận ISO 9001:2015 về hệ thống quản lý chất lượng</li>
              <li>Hơn 50.000 khách hàng tin tưởng và sử dụng dịch vụ thường xuyên</li>
              <li>Tỷ lệ hài lòng khách hàng đạt 98% theo khảo sát độc lập</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2em', color: '#27ae60', marginBottom: '20px' }}>
              Kế hoạch phát triển tương lai
            </h2>
            <p style={{ marginBottom: '20px', fontSize: '1.1em' }}>
              Với nền tảng vững chắc đã xây dựng được, Nông sản Việt Nam đang có những kế hoạch tham vọng cho tương lai:
            </p>
            
            <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '30px', borderRadius: '15px', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.5em', marginBottom: '20px' }}>🎯 Mục tiêu 2025</h3>
              <ul style={{ lineHeight: '2', paddingLeft: '20px' }}>
                <li>Mở rộng danh mục sản phẩm lên 10.000 SKU</li>
                <li>Phát triển mạng lưới phân phối tại 63 tỉnh thành</li>
                <li>Ra mắt ứng dụng di động với trải nghiệm mua sắm tối ưu</li>
                <li>Xây dựng hệ thống kho bãi tự động hóa hiện đại</li>
                <li>Phát triển thương hiệu riêng cho các sản phẩm chủ lực</li>
              </ul>
            </div>
            
            <p style={{ fontSize: '1.1em', lineHeight: '1.8' }}>
              Chúng tôi cũng đang nghiên cứu việc ứng dụng công nghệ AI và Big Data để cá nhân hóa trải nghiệm mua sắm, dự đoán nhu cầu khách hàng và tối ưu hóa chuỗi cung ứng. Bên cạnh đó, Nông sản Việt Nam cam kết đầu tư mạnh mẽ vào công nghệ blockchain để tăng cường tính minh bạch trong chuỗi cung ứng và đảm bảo truy xuất nguồn gốc sản phẩm.
            </p>
          </section>

          <section style={{ background: '#27ae60', color: 'white', padding: '40px', borderRadius: '15px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>
              Liên hệ với chúng tôi
            </h2>
            <p style={{ fontSize: '1.2em', marginBottom: '30px', lineHeight: '1.8' }}>
              Nông sản Việt Nam luôn sẵn sàng lắng nghe và phục vụ bạn. Hãy liên hệ với chúng tôi qua các kênh sau:
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', textAlign: 'left' }}>
              <div>
                <h4 style={{ marginBottom: '10px' }}>📍 Địa chỉ</h4>
                <p>123 Đường ABC, Quận 1, TP.HCM</p>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px' }}>📞 Hotline</h4>
                <p>1900-xxxx (24/7)</p>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px' }}>✉️ Email</h4>
                <p>info@nongsanvietnam.com</p>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px' }}>🌐 Website</h4>
                <p>www.nongsanvietnam.com</p>
              </div>
            </div>
          </section>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;