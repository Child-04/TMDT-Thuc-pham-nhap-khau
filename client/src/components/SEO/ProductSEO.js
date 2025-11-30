import React from 'react';
import { Helmet } from 'react-helmet-async';

const ProductSEO = ({ product }) => {
  if (!product) return null;

  // Sử dụng slug cho URL thân thiện (nếu có), nếu không mới dùng _id
  const productUrl = `https://tmdt-thuc-pham-nhap-khau-client.onrender.com/detail/${product.slug || product._id}`;

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": "Nông sản Việt Nam"
    },
    "offers": {
      "@type": "Offer",
      "url": productUrl,
      "priceCurrency": "VND",
      "price": product.salePrice || product.price, // Ưu tiên giá sale
      "priceValidUntil": "2025-12-31",
      "availability": product.amount > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Nông sản Việt Nam"
      }
    },
    "aggregateRating": product.rating ? {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.numReviews || 1,
      "bestRating": "5",
      "worstRating": "1"
    } : undefined
  };

  return (
    <Helmet>
      <title>{product.name} - Nông sản Việt Nam</title>
      <meta name="description" content={`Mua ${product.name} chất lượng cao, giá tốt ${product.salePrice}đ. Giao hàng nhanh toàn quốc.`} />
      <meta name="keywords" content={`${product.name}, thực phẩm sạch, nông sản việt, ${product.type}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="product" />
      <meta property="og:title" content={`${product.name} - Giá tốt nhất`} />
      <meta property="og:description" content={`Chỉ ${product.salePrice}đ - ${product.description}`} />
      <meta property="og:image" content={product.image} />
      <meta property="og:url" content={productUrl} />
      <meta property="product:price:amount" content={product.salePrice || product.price} />
      <meta property="product:price:currency" content="VND" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={product.name} />
      <meta name="twitter:description" content={product.description} />
      <meta name="twitter:image" content={product.image} />
      
      <link rel="canonical" href={productUrl} />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default ProductSEO;