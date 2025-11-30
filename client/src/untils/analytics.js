// Google Analytics Configuration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual Google Analytics 4 ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);
  }
};

// Log page view
export const logPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Log events
export const logEvent = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Ecommerce tracking
export const trackPurchase = (transactionId, items, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: 'VND',
      items: items
    });
  }
};

export const trackAddToCart = (item, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'VND',
      value: value,
      items: [item]
    });
  }
};

export const trackViewItem = (item, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'VND',
      value: value,
      items: [item]
    });
  }
};