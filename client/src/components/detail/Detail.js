import React, { useEffect } from "react";
import "./Detail.css";
import DetailInfo from "./DetailInfo";
import RateStar from "./RateStar";
import { useParams, Link } from "react-router-dom"; // Thêm Link vào đây
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, getproductById } from "../../actions/ProductAction";
import CommentProduct from "./CommentProduct";
import BlogContent from "./BlogContent";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 
import { formatPrice } from "../../untils";
import { Helmet } from "react-helmet-async";

function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams(); // id ở đây chính là slug (vd: tao-nhap-khau)
  const detailProduct = useSelector((state) => state.getProductById.product);
  const product = useSelector((state) => state.allProduct.product);

  console.log("Slug từ URL:", id);
  console.log("Dữ liệu detailProduct:", detailProduct);

  useEffect(() => {
    dispatch(getAllProduct());
    // Đã xóa đoạn cleanup return [] bị sai
  }, [dispatch]);

  useEffect(() => {
    dispatch(getproductById(id));
  }, [dispatch, id]);

  // Lọc sản phẩm tương tự
  const relatedProducts = product
    ? product
        .filter(
          (p) => p.type === detailProduct?.type && p._id !== detailProduct?._id
        )
        .slice(0, 10)
    : [];

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick} style={styles.arrow}>
        <FaArrowRight size={30} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick} style={styles.arrow}>
        <FaArrowLeft size={30} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: relatedProducts.length > 4, // Chỉ infinite nếu có nhiều hơn 4 sp
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const productSchema = detailProduct ? {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": detailProduct.name,
    "image": [detailProduct.image],
    "description": detailProduct.description || `Mua ${detailProduct.name} chất lượng cao tại Nông Sản Việt.`,
    "sku": detailProduct._id,
    "brand": {
      "@type": "Brand",
      "name": "Nông Sản Việt"
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "VND",
      "price": detailProduct.salePrice, // Giá khuyến mãi
      "availability": detailProduct.amount > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": detailProduct.rating || 5,
      "reviewCount": detailProduct.numReviews || 1
    }
  } : null; 

  return (
    <section id="detail">
      {detailProduct && (
        <Helmet>
          <title>{detailProduct.name} - Nông Sản Việt</title>
          <meta name="description" content={`Chi tiết sản phẩm ${detailProduct.name} giá rẻ, tươi ngon.`} />
          <script type="application/ld+json">
            {JSON.stringify(productSchema)}
          </script>
        </Helmet>
      )}
      {detailProduct ? (
        <div className="detail">
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
          <div><BlogContent /></div>
          <div><RateStar /></div>
          <div><CommentProduct /></div>

          <div className="related-products">
            <h3>Sản phẩm tương tự</h3>
            {relatedProducts.length > 0 ? (
              <Slider {...settings}>
                {relatedProducts.map((product) => (
                  <div key={product._id} className="related-product-item" style={styles.relatedProductItem}>
                    <Link to={`/detail/${product.slug}`}> {/* QUAN TRỌNG: Dùng Link thay vì thẻ a */}
                      <img
                        src={product.image}
                        alt={product.name}
                        style={styles.relatedProductImage}
                      />
                      <p style={styles.relatedProductName}>{product.name}</p>
                      <p style={styles.relatedProductPrice}>{formatPrice(product.price)}đ</p>
                    </Link>
                  </div>
                ))}
              </Slider>
            ) : (
              <p>Chưa có sản phẩm tương tự</p>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Detail;

const styles = {
  relatedProducts: { marginTop: "30px" },
  relatedProductItem: {
    width: "250px", height: "350px", padding: "15px", textAlign: "center",
    backgroundColor: "#fff", transition: "transform 0.3s ease", cursor: "pointer",
    borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", marginRight: "15px",
  },
  relatedProductImage: {
    width: "100%", height: "300px", objectFit: "cover", marginBottom: "10px", borderRadius: "18px",
  },
  relatedProductName: { fontSize: "16px", fontWeight: "bold", marginBottom: "5px", color: "#333", textDecoration: "none" },
  relatedProductPrice: { fontSize: "14px", color: "#d70018" },
  arrow: { zIndex: 999, position: "absolute", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "#000" },
};