import React, { useEffect } from "react";
import "./Detail.css";
import DetailInfo from "./DetailInfo";
import RateStar from "./RateStar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, getproductById } from "../../actions/ProductAction";
import CommentProduct from "./CommentProduct";
import BlogContent from "./BlogContent";
import Slider from "react-slick"; // Import thư viện react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import các icon
import { formatPrice } from "../../untils";
import ProductSEO from "../SEO/ProductSEO";

// SEO Text Content Component
const DetailSEOContent = () => (
  <div style={{ display: 'none' }} className="detail-seo-content">
    <h1>Thông tin chi tiết sản phẩm thực phẩm nhập khẩu cao cấp</h1>
    <p>Khám phá thông tin toàn diện về sản phẩm thực phẩm nhập khẩu chất lượng cao tại Nông sản Việt Nam. Chúng tôi cung cấp đầy đủ thông tin về nguồn gốc, thành phần dinh dưỡng, cách sử dụng và bảo quản sản phẩm để đảm bảo khách hàng có được trải nghiệm tốt nhất.</p>
    
    <h2>Thông tin sản phẩm chi tiết và chính xác</h2>
    <p>Mỗi sản phẩm được trình bày với thông tin đầy đủ bao gồm tên gọi chính thức, thương hiệu, xuất xứ rõ ràng, thành phần chi tiết, giá trị dinh dưỡng, hướng dẫn sử dụng, điều kiện bảo quản và thời hạn sử dụng. Tất cả thông tin đều được kiểm tra và xác thực bởi đội ngũ chuyên gia để đảm bảo tính chính xác cao nhất.</p>
    
    <h3>Hình ảnh sản phẩm chất lượng cao</h3>
    <p>Bộ sưu tập hình ảnh sản phẩm được chụp bởi nhiếp ảnh gia chuyên nghiệp với thiết bị hiện đại, ánh sáng chuẩn studio và nhiều góc độ khác nhau. Khách hàng có thể xem chi tiết từng phần của sản phẩm từ bên ngoài đến bên trong, từ bao bì đến chất lượng thực tế của sản phẩm.</p>
    
    <h3>Thành phần dinh dưỡng và lợi ích sức khỏe</h3>
    <p>Bảng thành phần dinh dưỡng chi tiết với đầy đủ thông tin về calories, protein, carbohydrate, lipid, vitamin, khoáng chất và các chất dinh dưỡng thiết yếu khác. Phân tích lợi ích sức khỏe cụ thể cho từng nhóm tuổi và tình trạng sức khỏe đặc biệt.</p>
    
    <h3>Xuất xứ và chứng nhận chất lượng</h3>
    <p>Thông tin rõ ràng về quốc gia xuất xứ, nhà sản xuất, địa chỉ cơ sở sản xuất và đầy đủ các giấy tờ chứng nhận chất lượng quốc tế như ISO, HACCP, FDA, CE. Hệ thống truy xuất nguồn gốc cho phép theo dõi từng lô hàng từ khi nhập khẩu đến khi bán ra.</p>
    
    <h3>Hướng dẫn sử dụng và bảo quản</h3>
    <p>Hướng dẫn chi tiết về cách sử dụng sản phẩm hiệu quả, liều lượng khuyên dùng, thời điểm sử dụng tốt nhất trong ngày, cách kết hợp với các thực phẩm khác và phương pháp bảo quản để duy trì chất lượng dinh dưỡng cao nhất.</p>
    
    <h3>Đánh giá từ khách hàng</h3>
    <p>Hệ thống đánh giá và nhận xét từ khách hàng đã sử dụng sản phẩm thực tế, bao gồm điểm số đánh giá chi tiết về chất lượng, hương vị, mùi thơm, độ tươi ngon và mức độ hài lòng tổng thể. Khách hàng có thể tham khảo kinh nghiệm của những người đã mua trước.</p>
    
    <h3>Sản phẩm liên quan và gợi ý</h3>
    <p>Danh sách sản phẩm liên quan và gợi ý thông minh dựa trên thuật toán machine learning, phân tích hành vi mua sắm và sở thích của khách hàng. Giúp khách hàng dễ dàng tìm được những sản phẩm bổ sung hoặc thay thế phù hợp.</p>
    
    <h2>Dịch vụ chăm sóc khách hàng chuyên nghiệp</h2>
    <p>Đội ngũ chăm sóc khách hàng được đào tạo chuyên sâu về sản phẩm và dinh dưỡng, sẵn sàng tư vấn và hỗ trợ khách hàng 24/7. Dịch vụ tư vấn miễn phí về lựa chọn sản phẩm phù hợp với nhu cầu dinh dưỡng và sức khỏe của từng cá nhân và gia đình.</p>
    
    <h3>Chính sách đổi trả linh hoạt</h3>
    <p>Chính sách đổi trả rõ ràng và linh hoạt với thời gian đổi trả hợp lý cho từng loại sản phẩm. Quy trình đổi trả đơn giản, nhanh chóng với sự hỗ trợ tận tình từ đội ngũ chăm sóc khách hàng chuyên nghiệp.</p>
    
    <h3>Giao hàng nhanh chóng và an toàn</h3>
    <p>Hệ thống giao hàng toàn quốc với thời gian nhanh chóng, đảm bảo chất lượng sản phẩm trong quá trình vận chuyển. Đặc biệt chú trọng đến việc bảo quản nhiệt độ cho các sản phẩm tươi sống và đông lạnh bằng xe chuyên dụng có hệ thống làm lạnh hiện đại.</p>
  </div>
);

function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailProduct = useSelector((state) => state.getProductById.product);
  const product = useSelector((state) => state.allProduct.product);

  // Lấy danh sách sản phẩm khi component được mount
  useEffect(() => {
    dispatch(getAllProduct());
    return () => {
      return [];
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getproductById(id));
  }, [dispatch, id]);

  // Lọc ra các sản phẩm tương tự (cùng loại nhưng không trùng id)
  const relatedProducts = product
    .filter(
      (p) => p.type === detailProduct?.type && p._id !== detailProduct?._id
    )
    .slice(0, 10); // Hiển thị tối đa 10 sản phẩm

  // Custom arrow component cho slider
  // Custom arrow component cho slider
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow slick-next"
        onClick={onClick}
        style={styles.arrow}
      >
        <FaArrowRight size={30} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow slick-prev"
        onClick={onClick}
        style={styles.arrow}
      >
        <FaArrowLeft size={30} />
      </div>
    );
  };

  // Cấu hình cho Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Hiển thị 4 sản phẩm cùng lúc
    slidesToScroll: 1, // Cuộn 1 sản phẩm mỗi lần
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="detail">
      {detailProduct ? (
        <div className="detail">
          <ProductSEO product={detailProduct} />
          <DetailSEOContent />
          <div className="detail-title">
            <h2>{detailProduct.name}</h2>
          </div>
          <div className="detail-info">
            <div className="detail-info-slide">
              <div className="detail-info-slide-image">
                <img src={detailProduct.image} alt={detailProduct.name} />
              </div>
            </div>
            <DetailInfo product={detailProduct} />
          </div>
          <div>
            <BlogContent />
          </div>
          <div>
            <RateStar />
          </div>
          <div>
            <CommentProduct />
          </div>

          {/* Hiển thị sản phẩm tương tự */}
          <div className="related-products">
            <h3>Sản phẩm tương tự</h3>
            <Slider {...settings}>
              {relatedProducts.map((product) => (
                <div
                  key={product._id}
                  className="related-product-item"
                  style={styles.relatedProductItem}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={styles.relatedProductImage}
                  />
                  <p style={styles.relatedProductName}>
                    <a style={styles.relatedProductName} href={"/detail/" + product._id}>{product.name}</a>
                  </p>
                  <p style={styles.relatedProductPrice}>{formatPrice(product.price)}đ</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Detail;

// CSS trực tiếp trong component hoặc thêm vào file Detail.css
const styles = {
  relatedProducts: {
    marginTop: "30px",
  },
  relatedProductItem: {
    width: "250px", // Kích thước cố định cho item
    height: "350px", // Kích thước cố định cho item
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginRight: "15px",
  },
  relatedProductImage: {
    width: "100%",
    height: "300px", // Kích thước cố định cho ảnh
    objectFit: "cover", // Đảm bảo ảnh luôn vừa khung
    marginBottom: "10px",
    borderRadius: "18px",
  },
  relatedProductName: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  relatedProductPrice: {
    fontSize: "14px",
    color: "#d70018",
  },
  arrow: {
    zIndex: 999,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#000",
  },
};
