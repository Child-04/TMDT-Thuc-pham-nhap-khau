# 🛒 Thương mại điện tử - Thực phẩm nhập khẩu

## 📌 Giới thiệu
Dự án **Thương mại điện tử - Thực phẩm nhập khẩu** là một nền tảng trực tuyến giúp người dùng tìm kiếm, đặt mua và thanh toán các loại thực phẩm nhập khẩu chất lượng cao.
Video Demo: https://youtu.be/M-uoxc5Dl5Y
## ✨ Tính năng chính
- 📝 **Đăng ký / Đăng nhập**: Hỗ trợ tài khoản người dùng và admin.
- 🛍️ **Mua sắm sản phẩm**: Xem danh mục sản phẩm, chi tiết sản phẩm, thêm vào giỏ hàng.
- 💳 **Thanh toán trực tuyến**: Tích hợp các cổng thanh toán như PayPal, Stripe, Momo.
- 📦 **Quản lý đơn hàng**: Theo dõi trạng thái đơn hàng và lịch sử giao dịch.
- 📊 **Quản trị viên**: Quản lý sản phẩm, đơn hàng, người dùng.

## 🛠 Công nghệ sử dụng
- **Front-end**: React.js, Tailwind CSS
- **Back-end**: Node.js, Express.js
- **Cơ sở dữ liệu**: MongoDB
- **Thanh toán**: Stripe, PayPal, Momo
- **Hosting**: Vercel / Heroku / AWS

## 🚀 Cài đặt
### 1️⃣ Clone repo
```sh
git clone https://github.com/NguyenHuuDo3101/Thuong-mai-dien-tu-Thuc-pham-nhap-khau.git
cd Thuong-mai-dien-tu-Thuc-pham-nhap-khau
```

### 2️⃣ Cài đặt dependencies
#### **Back-end**
```sh
cd server
npm install
```
#### **Front-end**
```sh
cd client
npm install
```

### 3️⃣ Chạy dự án
#### **Chạy server**
```sh
cd server
node seeder.js 
npm start
```
#### **Chạy front-end**
```sh
cd client
npm start

```## Chạy data
cmd (Admin) : net start MongoDB
open : mongodb
connet connections : mongodb://127.0.0.1:27017/shop
server : node seeder.js
