# Hướng dẫn cấu hình CORS và API Endpoints

## Các thay đổi đã thực hiện

### 1. Backend (Server)

#### ✅ Cập nhật CORS trong `server/config/socket/socket.js`
- Thêm domain Render của frontend vào danh sách allowed origins
- Cho phép cả `http://localhost:3000` (development) và `https://tmdt-thuc-pham-nhap-khau-client.onrender.com` (production)

#### ✅ Cập nhật CORS trong `server/index.js`
- Cấu hình CORS middleware để chấp nhận requests từ cả localhost và domain Render
- Bật credentials để hỗ trợ cookies/authentication

### 2. Frontend (Client)

#### ✅ Cập nhật BASE_URL trong `client/src/constants/UserConstant.js`
- Sử dụng biến môi trường `REACT_APP_API_URL` từ file `.env`
- Fallback về URL production nếu không có biến môi trường

#### ✅ Cập nhật tất cả các file sử dụng hardcoded URLs
Các file đã được cập nhật để sử dụng `BASE_URL` constant:
- `src/components/AppChat/AppChat.js` - Socket.IO endpoint và chat APIs
- `src/components/Admin/components/AppChat/Contact/Contact.js` - Admin chat socket
- `src/components/Admin/components/AppChat/Chat/Chat.js` - Admin chat messages
- `src/pages/ChatPage.js` - Image upload
- `src/components/order/VnPay.js` - VNPay payment
- `src/components/order/VnPaySuccess.js` - VNPay callback
- `src/components/order/Payment.js` - PayPal config
- `src/components/HotSale/components/Iphone.js` - Product data
- `src/components/HotSale/components/Meat.js` - Product data
- `src/components/HotSale/components/Other.js` - Product data
- `src/actions/GhnAction.js` - Order APIs

## Cấu hình môi trường

### Development (Local)
```env
REACT_APP_API_URL=http://localhost:4000
```

### Production (Render)
```env
REACT_APP_API_URL=https://tmdt-thuc-pham-nhap-khau-server.onrender.com
```

## Hướng dẫn Deploy

### 1. Deploy Backend
1. Push code backend lên GitHub
2. Render sẽ tự động build lại
3. Kiểm tra logs để đảm bảo server chạy thành công

### 2. Deploy Frontend
1. Cập nhật file `.env` với URL backend production
2. Push code frontend lên GitHub
3. Render sẽ tự động build lại
4. Truy cập website và kiểm tra Console để đảm bảo không còn CORS errors

### 3. Cấu hình biến môi trường trên Render

#### Backend:
Các biến môi trường cần thiết:
- `MONGODB_URI` - Connection string MongoDB
- `TOKEN_SECRET` / `JWT_SECRET` - Secret key cho JWT
- `VNPAY_RETURN_URL` - URL callback cho VNPay (ví dụ: `https://tmdt-thuc-pham-nhap-khau-client.onrender.com/vnpay-success`)
- Các biến môi trường khác theo nhu cầu (Cloudinary, PayPal, etc.)

#### Frontend:
Thêm biến môi trường:
- `REACT_APP_API_URL=https://tmdt-thuc-pham-nhap-khau-server.onrender.com`

## Kiểm tra

Sau khi deploy, kiểm tra:
1. ✅ Website load được không có CORS errors
2. ✅ Socket.IO kết nối thành công (chat feature)
3. ✅ API calls hoạt động (products, orders, etc.)
4. ✅ Payment gateways hoạt động (VNPay, PayPal)
5. ✅ Image upload hoạt động

## Lưu ý quan trọng

- Không commit file `.env` vào Git (đã có trong `.gitignore`)
- Sử dụng file `.env.example` làm template
- Khi test local, đổi `.env` về `http://localhost:4000`
- Khi deploy production, đổi `.env` về URL Render
