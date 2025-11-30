import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Breadcrumb.css';

const Breadcrumb = ({ items }) => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `https://tmdt-thuc-pham-nhap-khau-client.onrender.com${item.url}` : undefined
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      </Helmet>
      
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="breadcrumb-list">
          {items.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              {item.url && index < items.length - 1 ? (
                <Link to={item.url} className="breadcrumb-link">
                  {item.name}
                </Link>
              ) : (
                <span className="breadcrumb-current">{item.name}</span>
              )}
              {index < items.length - 1 && (
                <span className="breadcrumb-separator"> / </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;