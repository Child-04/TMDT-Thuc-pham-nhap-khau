// File: server/controllers/SitemapController.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { ProductModel } from '../models/ProductModel.js';
import expressAsyncHandler from 'express-async-handler';

export const getSitemap = expressAsyncHandler(async (req, res) => {
  try {
    // 1. Cấu hình domain (Localhost hoặc Domain thật)
    const hostname = 'http://localhost:3000'; 

    const smStream = new SitemapStream({ hostname });

    // 2. Thêm các trang tĩnh
    smStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
    smStream.write({ url: '/login', changefreq: 'monthly', priority: 0.5 });
    smStream.write({ url: '/register', changefreq: 'monthly', priority: 0.5 });
    
    // 3. Thêm các trang động từ Database
    const products = await ProductModel.find({});
    
    products.forEach(product => {
      if (product.slug) {
        smStream.write({ 
            url: `/detail/${product.slug}`, // Đảm bảo đường dẫn đúng format
            changefreq: 'weekly', 
            priority: 0.8
        });
      }
    });

    // 4. Kết thúc luồng dữ liệu
    smStream.end();

    // 5. Tạo file XML và gửi về trình duyệt
    const sitemap = await streamToPromise(smStream);
    
    // Chỉ set Content-Type là XML, KHÔNG dùng gzip nữa để tránh lỗi hiển thị
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);

  } catch (error) {
    console.error("Sitemap Error:", error);
    res.status(500).end();
  }
});