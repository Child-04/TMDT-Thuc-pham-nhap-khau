import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/UserConstant';

const ApiTest = () => {
  const [apiStatus, setApiStatus] = useState('checking...');
  const [productsStatus, setProductsStatus] = useState('checking...');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Test basic API connection
    const testApiConnection = async () => {
      try {
        console.log('Testing API URL:', BASE_URL);
        
        // Test root endpoint
        const rootResponse = await fetch(`${BASE_URL}/`);
        const rootData = await rootResponse.json();
        console.log('Root API response:', rootData);
        
        if (rootResponse.ok) {
          setApiStatus(`✅ Connected - ${rootData.message}`);
        } else {
          setApiStatus(`❌ Failed - ${rootResponse.status}`);
        }

        // Test products endpoint
        const productsResponse = await fetch(`${BASE_URL}/products`);
        if (productsResponse.ok) {
          const productsData = await productsResponse.json();
          setProductsStatus(`✅ Products loaded - ${productsData.length} items`);
        } else {
          setProductsStatus(`❌ Products failed - ${productsResponse.status}`);
        }
        
      } catch (err) {
        console.error('API Test Error:', err);
        setApiStatus('❌ Connection failed');
        setProductsStatus('❌ Products failed');
        setError(err.message);
      }
    };

    testApiConnection();
  }, []);

  return (
    <div style={{ padding: '20px', background: '#f5f5f5', margin: '10px', borderRadius: '8px' }}>
      <h3>🔍 API Connection Test</h3>
      <p><strong>API URL:</strong> {BASE_URL}</p>
      <p><strong>Environment:</strong> {process.env.NODE_ENV}</p>
      <p><strong>Root API:</strong> {apiStatus}</p>
      <p><strong>Products API:</strong> {productsStatus}</p>
      {error && (
        <p style={{ color: 'red' }}><strong>Error:</strong> {error}</p>
      )}
    </div>
  );
};

export default ApiTest;