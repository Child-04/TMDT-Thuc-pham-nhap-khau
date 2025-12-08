# 💳 HƯỚNG DẪN CẤU HÌNH THANH TOÁN MOMO VÀ PAYPAL

## 📋 MỤC LỤC
1. [Tổng quan](#tổng-quan)
2. [Cấu hình MoMo](#cấu-hình-momo)
3. [Cấu hình PayPal](#cấu-hình-paypal)
4. [Cấu hình trên Render](#cấu-hình-trên-render)
5. [Test thanh toán](#test-thanh-toán)

---

## 🎯 TỔNG QUAN

Dự án đã tích hợp 3 phương thức thanh toán:
- ✅ **MoMo** - Ví điện tử Việt Nam
- ✅ **PayPal** - Thanh toán quốc tế
- ✅ **VNPay** - Cổng thanh toán Việt Nam (đã có)

---

## 🟣 CẤU HÌNH MOMO

### ~~Bước 1: Đăng ký MoMo Business Account~~ (KHÔNG CẦN - Dự án sinh viên)

**❌ BỎ QUA BƯỚC NÀY** - Dự án sinh viên không cần đăng ký thật

### ~~Bước 2: Lấy thông tin API~~ (KHÔNG CẦN - Dùng Sandbox)

**✅ DÙNG THÔNG TIN SANDBOX SẴN CÓ** (Xem Bước 3)

### Bước 3: Dùng MoMo Sandbox (Cho dự án sinh viên)

**Thông tin test MoMo Sandbox (Dùng sẵn):**
```dotenv
MOMO_PARTNER_CODE=MOMO
MOMO_ACCESS_KEY=F8BBA842ECF85
MOMO_SECRET_KEY=K951B6PE1waDMi640xX08PD3vg6EkVlz
```

**✅ LƯU Ý CHO DỰ ÁN SINH VIÊN:** 
- Đây là thông tin **SANDBOX** từ tài liệu MoMo Developer
- **SỬ DỤNG NGAY** - không cần đăng ký tài khoản
- Thanh toán hoàn toàn ảo (không có tiền thật)
- **Đủ để demo và nộp bài** cho giảng viên

### Bước 4: Cấu hình URLs

```dotenv
# Local development
MOMO_REDIRECT_URL=http://localhost:3000/payment-return
MOMO_IPN_URL=http://localhost:4000/api/payment/momo-ipn

# Production (Render)
MOMO_REDIRECT_URL=https://tmdt-thuc-pham-nhap-khau-client.onrender.com/payment-return
MOMO_IPN_URL=https://tmdt-thuc-pham-nhap-khau-server.onrender.com/api/payment/momo-ipn
```

**Giải thích:**
- **REDIRECT_URL:** URL mà người dùng sẽ được chuyển về sau khi thanh toán
- **IPN_URL:** URL mà MoMo gọi để thông báo kết quả thanh toán (webhook)

### ~~Bước 5: Đăng ký IPN URL với MoMo~~ (KHÔNG CẦN - Sandbox mode)

**❌ BỎ QUA BƯỚC NÀY** 
- Sandbox không cần đăng ký IPN URL
- Hệ thống tự động xử lý khi dùng test credentials

---

## 💙 CẤU HÌNH PAYPAL

### Bước 1: Tạo PayPal Developer Account (MIỄN PHÍ)

1. **Truy cập:** https://developer.paypal.com/
2. **Đăng ký/Đăng nhập** (dùng email bất kỳ - MIỄN PHÍ)
3. Vào **Dashboard** → **Apps & Credentials**

**✅ CHO DỰ ÁN SINH VIÊN:** Tài khoản Developer hoàn toàn miễn phí, không cần tài khoản PayPal thật

### Bước 2: Tạo App mới

1. Click **"Create App"**
2. Nhập tên app: `TMDT-Thuc-pham`
3. **⚠️ QUAN TRỌNG:** Chọn **Sandbox** (KHÔNG chọn Live)
4. Click **Create App**

**✅ CHO DỰ ÁN SINH VIÊN:** Luôn dùng Sandbox, không bao giờ chuyển sang Live

### Bước 3: Lấy Client ID

Sau khi tạo app, bạn sẽ thấy:

```
Client ID: AeXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Secret: EXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**Copy Client ID** để cấu hình

### Bước 4: Test với PayPal Sandbox

PayPal cung cấp **tài khoản test** tự động:

1. Vào **Sandbox** → **Accounts**
2. Bạn sẽ thấy 2 tài khoản:
   - **Business Account** (người bán - của bạn)
   - **Personal Account** (người mua - dùng để test)

3. Click vào **Personal Account** → **View/Edit**
4. Xem thông tin đăng nhập:
   ```
   Email: sb-xxxxx@personal.example.com
   Password: XXXXXXXX
   ```

### Bước 5: Cấu hình Environment Variable

```dotenv
# Sandbox (Cho dự án sinh viên - CHỈ DÙNG CÁI NÀY)
PAYPAL_CLIENT_ID=AeXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**❌ KHÔNG DÙNG Live Client ID** - Chỉ dành cho doanh nghiệp thật

---

## ☁️ CẤU HÌNH TRÊN RENDER

### Bước 1: Vào Render Dashboard

1. Truy cập: https://dashboard.render.com/
2. Chọn service **tmdt-server** (backend)

### Bước 2: Thêm Environment Variables

Click **Environment** → **Add Environment Variable**

#### MoMo Configuration:
```
MOMO_PARTNER_CODE = MOMO
MOMO_ACCESS_KEY = F8BBA842ECF85
MOMO_SECRET_KEY = K951B6PE1waDMi640xX08PD3vg6EkVlz
MOMO_REDIRECT_URL = https://tmdt-thuc-pham-nhap-khau-client.onrender.com/payment-return
MOMO_IPN_URL = https://tmdt-thuc-pham-nhap-khau-server.onrender.com/api/payment/momo-ipn
```

#### PayPal Configuration:
```
PAYPAL_CLIENT_ID = AeXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### Bước 3: Save và Redeploy

1. Click **"Save Changes"**
2. Render sẽ tự động redeploy service
3. Đợi 2-3 phút để deploy hoàn tất

---

## 🧪 TEST THANH TOÁN

### Test Local (Development)

1. **Start server:**
   ```bash
   cd server
   npm start
   ```

2. **Start client:**
   ```bash
   cd client
   npm start
   ```

3. **Thêm sản phẩm vào giỏ hàng**

4. **Chọn thanh toán Online**

5. **Test MoMo:**
   - Click "Thanh toán MoMo"
   - Sử dụng app MoMo test hoặc số điện thoại test
   - Xác nhận thanh toán

6. **Test PayPal:**
   - Click PayPal button
   - Đăng nhập bằng tài khoản Sandbox Personal
   - Xác nhận thanh toán

### Test Production (Render)

**⚠️ QUAN TRỌNG:**
1. Đảm bảo đã cấu hình đầy đủ Environment Variables trên Render
2. Test với tài khoản Sandbox trước
3. Chỉ chuyển sang Live sau khi test thành công

**Test flow:**
1. Truy cập: `https://tmdt-thuc-pham-nhap-khau-client.onrender.com`
2. Thêm sản phẩm vào giỏ
3. Tiến hành thanh toán
4. Kiểm tra payment return page
5. Xác nhận đơn hàng được tạo trong database

---

## 📊 KIỂM TRA KẾT QUẢ

### MoMo Success Response:
```json
{
  "resultCode": 0,
  "message": "Success",
  "orderId": "xxxxx",
  "transId": "xxxxx"
}
```

### PayPal Success Response:
```json
{
  "status": "COMPLETED",
  "id": "xxxxx",
  "payer": {...}
}
```

### Database Check:
Kiểm tra collection `orders`:
```javascript
{
  paymentMethod: "MoMo" // hoặc "PayPal"
  status: "pendding"
  paymentResult: {...}
}
```

---

## 🔧 TROUBLESHOOTING

### Lỗi thường gặp:

#### 1. MoMo: "Invalid signature"
**Nguyên nhân:** Secret Key sai hoặc format request không đúng
**Giải pháp:** 
- Kiểm tra lại MOMO_SECRET_KEY
- Xem log server để check raw signature

#### 2. MoMo: "Amount must be >= 1000"
**Nguyên nhân:** Số tiền thanh toán < 1000đ
**Giải pháp:** Code đã tự động fix, đặt min = 10,000đ nếu nhỏ hơn

#### 3. PayPal: "Client ID not found"
**Nguyên nhân:** Chưa set PAYPAL_CLIENT_ID
**Giải pháp:** 
- Kiểm tra file .env
- Restart server sau khi thêm

#### 4. PayPal button không hiện
**Nguyên nhân:** Script PayPal chưa load
**Giải pháp:** 
- Check Network tab trong DevTools
- Đảm bảo `addPayPalScript()` được gọi

#### 5. Payment return 404
**Nguyên nhân:** Chưa add route trong App.js
**Giải pháp:** Route đã được thêm sẵn ở `/payment-return`

---

## 📝 CHECKLIST DEPLOY

- [ ] Đã đăng ký MoMo Business (hoặc dùng Sandbox để test)
- [ ] Đã lấy MoMo Partner Code, Access Key, Secret Key
- [ ] Đã tạo PayPal Developer App
- [ ] Đã lấy PayPal Client ID
- [ ] Đã thêm tất cả Environment Variables vào Render
- [ ] Đã test thanh toán trên local
- [ ] Đã test thanh toán trên production
- [ ] Đã kiểm tra orders được tạo trong database
- [ ] Đã đăng ký IPN URL với MoMo

---

## 🎉 KẾT LUẬN

Sau khi hoàn thành các bước trên, website của bạn đã có đầy đủ tính năng thanh toán:

✅ **MoMo** - Thanh toán ví điện tử phổ biến nhất VN
✅ **PayPal** - Thanh toán quốc tế
✅ **VNPay** - Cổng thanh toán ngân hàng VN
✅ **COD** - Thanh toán khi nhận hàng

**Lưu ý cuối:**
- Luôn test với Sandbox trước khi chuyển sang Live
- Bảo mật Secret Key, không push lên GitHub
- Monitor logs để phát hiện lỗi sớm
- Cập nhật documentation khi có thay đổi

**Hỗ trợ:**
- MoMo Support: https://developers.momo.vn/
- PayPal Developer: https://developer.paypal.com/support/

Chúc bạn deploy thành công! 🚀
