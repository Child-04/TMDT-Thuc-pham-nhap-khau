import React from 'react';
import { Helmet } from 'react-helmet-async';

const ProductSEO = ({ product }) => {
  if (!product) return null;

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
      "url": `https://tmdt-thuc-pham-nhap-khau-client.onrender.com/detail/${product._id}`,
      "priceCurrency": "VND",
      "price": product.price,
      "priceValidUntil": "2025-12-31",
      "availability": product.countInStock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Nông sản Việt Nam"
      }
    },
    "aggregateRating": product.rating ? {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.numReviews || 0,
      "bestRating": "5",
      "worstRating": "1"
    } : undefined
  };

  return (
    <Helmet>
      <title>{product.name} - Nông sản Việt Nam | Thực phẩm nhập khẩu chất lượng</title>
      <meta name="description" content={`${product.description}. Mua ${product.name} chính hãng tại Nông sản Việt Nam với giá ${product.price}₫. Giao hàng nhanh, đảm bảo chất lượng.`} />
      <meta name="keywords" content={`${product.name}, thực phẩm nhập khẩu, ${product.category}, mua online, chất lượng cao`} />
      
      <meta property="og:title" content={`${product.name} - Nông sản Việt Nam`} />
      <meta property="og:description" content={product.description} />
      <meta property="og:image" content={product.image} />
      <meta property="og:url" content={`https://tmdt-thuc-pham-nhap-khau-client.onrender.com/detail/${product._id}`} />
      <meta property="og:type" content="product" />
      <meta property="product:price:amount" content={product.price} />
      <meta property="product:price:currency" content="VND" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${product.name} - Nông sản Việt Nam`} />
      <meta name="twitter:description" content={product.description} />
      <meta name="twitter:image" content={product.image} />
      
      <link rel="canonical" href={`https://tmdt-thuc-pham-nhap-khau-client.onrender.com/detail/${product._id}`} />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default ProductSEO;