# 💳 Hướng dẫn cấu hình Payment Gateway

## 📊 Tổng quan các phương thức thanh toán

| Phương thức | Trạng thái | Cần cấu hình | Cách hoạt động |
|-------------|-----------|--------------|----------------|
| **COD** | ✅ Hoạt động | Không | Thanh toán khi nhận hàng |
| **PayPal** | ✅ Hoạt động | Có | Client-side processing |
| **MoMo** | ✅ Đã implement | **CẦN SỬA URL** | Server redirect |
| **VNPay** | ❌ Chưa implement | Không dùng | - |

---

## 🔴 CƠ CHẾ HOẠT ĐỘNG

### 1️⃣ **PayPal** (Client-Side)

**Luồng xử lý:**
```
User chọn PayPal 
  → PayPal SDK load trên browser
  → User đăng nhập PayPal popup
  → Callback success trực tiếp trên client
  → Tạo order với paymentResult
  → Chuyển đến /orderSuccess
```

**Đặc điểm:**
- ✅ **Không cần server callback URL**
- ✅ Xử lý hoàn toàn trên client
- ✅ PayPalButton tự động handle redirect
- ⚠️ Cần `PAYPAL_CLIENT_ID` hợp lệ

**Code:**
```javascript
// Payment.js
<PayPalButton
  amount={1}
  onSuccess={successPaymentHandler}
/>

// successPaymentHandler tự động nhận paymentResult từ PayPal
```

---

### 2️⃣ **MoMo** (Server-Side Redirect)

**Luồng xử lý:**
```
User click MoMo logo
  → Frontend POST đơn hàng → /api/payment/momo
  → Backend tạo order trong DB (status: pending)
  → Backend gọi MoMo API → nhận payUrl
  → Backend trả payUrl cho frontend
  → Frontend redirect user sang MoMo
  → User thanh toán trên app MoMo
  → MoMo redirect về MOMO_REDIRECT_URL
  → MoMo gọi IPN → /api/payment/momo-ipn (cập nhật DB)
```

**Đặc điểm:**
- ⚠️ **CẦN server callback URLs**
- ⚠️ URLs phải accessible từ internet
- ✅ Bảo mật cao (signature verification)
- ✅ IPN đảm bảo order được cập nhật

**Code flow:**

1. **Frontend** (`VnPay.js` - tên file cũ nhưng dùng cho MoMo):
```javascript
const handleMoMoPayment = async () => {
  const res = await fetch("http://localhost:4000/api/payment/momo", { // ⚠️ CẦN SỬA
    method: "POST",
    body: JSON.stringify(orderData)
  });
  const data = await res.json();
  window.location.href = data.url; // Chuyển sang MoMo
};
```

2. **Backend** (`PaymentController.js`):
```javascript
export const createPayment = async (req, res) => {
  const order = new OrderModel({ ...req.body, status: "pending" });
  await order.save();
  
  const result = await createMoMoPayment(amount, orderInfo, orderId);
  res.json({ url: result.payUrl }); // Trả link MoMo
};
```

3. **MoMo Utils** (`server/untils/momo.js`):
```javascript
export async function createMoMoPayment(amount, orderInfo) {
  const redirectUrl = process.env.MOMO_REDIRECT_URL; // ⚠️ CẦN SỬA
  const ipnUrl = process.env.MOMO_IPN_URL;           // ⚠️ CẦN SỬA
  
  // Tạo signature và gọi MoMo API
  // Trả về { payUrl: "https://payment.momo.vn/..." }
}
```

---

## 🔧 GIẢI PHÁP - CẦN LÀM GÌ?

### ✅ **PayPal - Không cần sửa gì**

Chỉ cần đảm bảo có `PAYPAL_CLIENT_ID` trên Render:

**Backend Environment Variables (Render):**
```env
PAYPAL_CLIENT_ID=your-paypal-sandbox-client-id
```

PayPal hoạt động hoàn toàn client-side nên không cần URL callback.

---

### ⚠️ **MoMo - CẦN SỬA 2 NƠI**

#### 🔴 **Vấn đề 1: Frontend hardcode localhost**

**File:** `client/src/components/order/VnPay.js` (dòng 70)

**Hiện tại:**
```javascript
const res = await fetch("http://localhost:4000/api/payment/momo", {
```

**Cần sửa thành:**
```javascript
const res = await fetch(`${BASE_URL}/api/payment/momo`, {
```

#### 🔴 **Vấn đề 2: Backend callback URLs**

**Render Backend Environment Variables:**

```env
# MoMo Configuration
MOMO_PARTNER_CODE=MOMO
MOMO_ACCESS_KEY=F8BBA842ECF85
MOMO_SECRET_KEY=K951B6PE1waDMi640xX08PD3vg6EkVlz

# ⚠️ 2 DÒNG NÀY CẦN SỬA:
MOMO_REDIRECT_URL=https://tmdt-thuc-pham-nhap-khau-client.onrender.com/payment-success
MOMO_IPN_URL=https://tmdt-thuc-pham-nhap-khau-server.onrender.com/api/payment/momo-ipn
```

**Giải thích:**
- `MOMO_REDIRECT_URL`: User được chuyển về đây sau khi thanh toán
- `MOMO_IPN_URL`: MoMo gọi URL này để thông báo kết quả (backend-to-backend)

---

## 🚀 CHECKLIST THỰC HIỆN

### 📝 Bước 1: Sửa code Frontend

```javascript
// File: client/src/components/order/VnPay.js
// Dòng 70, sửa:
const res = await fetch(`${BASE_URL}/api/payment/momo`, {
```

### 📝 Bước 2: Cấu hình Render Backend

Vào **Render Dashboard** → **Backend Service** → **Environment**:

```env
PAYPAL_CLIENT_ID=your-paypal-client-id

MOMO_PARTNER_CODE=MOMO
MOMO_ACCESS_KEY=F8BBA842ECF85
MOMO_SECRET_KEY=K951B6PE1waDMi640xX08PD3vg6EkVlz
MOMO_REDIRECT_URL=https://tmdt-thuc-pham-nhap-khau-client.onrender.com/payment-success
MOMO_IPN_URL=https://tmdt-thuc-pham-nhap-khau-server.onrender.com/api/payment/momo-ipn
```

### 📝 Bước 3: Commit và Deploy

```bash
git add client/src/components/order/VnPay.js
git commit -m "fix: Use BASE_URL for MoMo payment endpoint"
git push origin main
```

### 📝 Bước 4: Test

1. Vào trang production
2. Thêm sản phẩm vào giỏ
3. Chọn "Thanh toán Online" → Click logo MoMo
4. Kiểm tra có chuyển sang trang MoMo không
5. Thanh toán test (MoMo sandbox)
6. Kiểm tra redirect về `/payment-success`

---

## 🔍 DEBUG

### Kiểm tra Backend Logs (Render)

```javascript
// Trong momo.js đã có log:
console.log("PartnerCode:", partnerCode);
console.log("MOMO_REDIRECT_URL:", redirectUrl);
```

Xem logs trên Render để đảm bảo các biến env được load đúng.

### Kiểm tra Frontend Console

```javascript
console.log("Calling MoMo API at:", `${BASE_URL}/api/payment/momo`);
```

### Test MoMo Sandbox

Thông tin test MoMo (nếu dùng sandbox):
- Số điện thoại: `0999999999`
- OTP: `999999`

---

## 📌 TÓM TẮT

| Phương thức | Cần sửa code | Cần cấu hình Render | Ghi chú |
|-------------|-------------|---------------------|---------|
| **PayPal** | ❌ Không | ✅ Có (`PAYPAL_CLIENT_ID`) | Client-side, không cần URL |
| **MoMo** | ✅ **Có** | ✅ **Có** (URLs) | Server-side, cần callback URLs |
| **COD** | ❌ Không | ❌ Không | Luôn hoạt động |

**Ưu tiên:**
1. ✅ Sửa `VnPay.js` dùng `BASE_URL`
2. ✅ Thêm biến env MoMo vào Render
3. ✅ Test cả PayPal và MoMo

## 🔧 Giải pháp

### 1. Cấu hình biến môi trường trên Render (Backend)

Vào **Render Dashboard** → **Backend Service** → **Environment** và cập nhật:

```env
# VNPay Return URL - URL frontend sau khi thanh toán thành công
VNPAY_RETURN_URL=https://tmdt-thuc-pham-nhap-khau-client.onrender.com/vnpay-success

# MoMo URLs (nếu implement MoMo sau này)
MOMO_REDIRECT_URL=https://tmdt-thuc-pham-nhap-khau-client.onrender.com/payment-return
MOMO_IPN_URL=https://tmdt-thuc-pham-nhap-khau-server.onrender.com/api/payment/momo-ipn
```

### 2. Kiểm tra route VNPay success trên Frontend

Đảm bảo có route `/vnpay-success` trong `client/src/App.js`:

```javascript
<Route path="/vnpay-success">
  <VnPaySuccess />
</Route>
```

### 3. Tạo component VnPaySuccess nếu chưa có

File: `client/src/components/order/VnPaySuccess.js` đã tồn tại và đang hoạt động.

## 📝 Lưu ý về Payment Gateway

### VNPay (Đang hoạt động)
- ✅ Code đã implement
- ❌ URL callback đang là localhost
- 🔧 **Cần sửa:** Cập nhật biến `VNPAY_RETURN_URL` trên Render

### PayPal (Đang hoạt động)
- ✅ Code đã implement
- ✅ Xử lý callback ngay trong component
- ✅ Không cần sửa URL

### MoMo (Chưa implement)
- ❌ Chỉ có biến môi trường
- ❌ Code chưa xử lý
- 🔧 **Cần implement:** Thêm MoMo payment flow trong `PaymentController.js`

## 🚀 Các bước thực hiện

### Bước 1: Cập nhật biến môi trường trên Render

1. Đăng nhập vào [Render Dashboard](https://dashboard.render.com/)
2. Chọn service Backend
3. Vào tab **Environment**
4. Thêm/Sửa biến: `VNPAY_RETURN_URL=https://tmdt-thuc-pham-nhap-khau-client.onrender.com/vnpay-success`
5. Click **Save Changes**
6. Service sẽ tự động redeploy

### Bước 2: Kiểm tra code PaymentController.js

Dòng 68 trong `server/controllers/PaymentController.js`:
```javascript
vnp_ReturnUrl: process.env.VNPAY_RETURN_URL ?? 'http://localhost:3000',
```

Code này đúng - nó sẽ dùng biến môi trường nếu có, fallback về localhost nếu không có.

### Bước 3: Test thanh toán

1. Deploy xong, vào trang web production
2. Thêm sản phẩm vào giỏ hàng
3. Chọn "Thanh toán online" với VNPay
4. Hoàn tất thanh toán trên trang VNPay sandbox
5. Kiểm tra xem có redirect về đúng trang success không

## 🔍 Debug

Nếu vẫn gặp lỗi, kiểm tra:

1. **Render Logs (Backend):**
   ```
   console.log('VNPAY_RETURN_URL:', process.env.VNPAY_RETURN_URL);
   ```

2. **Browser Console (Frontend):**
   - Xem URL redirect từ VNPay
   - Kiểm tra có lỗi CORS không

3. **VNPay Sandbox:**
   - URL return phải được đăng ký trong VNPay merchant dashboard
   - Kiểm tra TMN_CODE và HASH_SECRET đúng chưa

## 📌 Tóm tắt

| Payment Method | Status | Action Required |
|----------------|--------|-----------------|
| VNPay | ⚠️ Partial | Cập nhật `VNPAY_RETURN_URL` trên Render |
| PayPal | ✅ Working | Không cần sửa |
| MoMo | ❌ Not Implemented | Cần implement code |
| COD | ✅ Working | Không cần sửa |

**Ưu tiên:** Sửa VNPay trước (chỉ cần cập nhật biến môi trường, không cần code mới)
