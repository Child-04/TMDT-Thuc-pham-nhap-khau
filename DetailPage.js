import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header/Header";
import Detail from "../components/detail/Detail";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import AppChat from "../components/AppChat/AppChat";
import { useSelector } from "react-redux";

function DetailPage(props) {
  const { userInfo } = useSelector((state) => state.userSignin);
  const product = props.productData;

  // Giá trị mặc định nếu productData chưa có
  const canonicalUrl = window.location.href;
  const productName = product?.metaTitle || "Chi tiết sản phẩm";
  const productDescription = product?.metaDescription || "Mô tả sản phẩm";
  const productImageUrl = product?.image || "https://via.placeholder.com/1200x630.png?text=Product+Image";

  return (
    <div>
      <Helmet>
        <title>{productName}</title>
        <meta name="description" content={productDescription} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={productName} />
        <meta property="og:description" content={productDescription} />
        <meta property="og:image" content={productImageUrl} />
        <meta property="og:image:secure_url" content={productImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={productName} />
        <meta property="og:site_name" content="VNHI - Cửa Hàng Giày Thể Thao" />
        <meta property="og:locale" content="vi_VN" />
      </Helmet>

      <Header />
      <Detail />
      {/* Chat nếu đăng nhập */}
      {userInfo && <AppChat />}

      <ScrollToTop />
    </div>
  );
}

export default DetailPage;
