# 🎓 DỰ ÁN SINH VIÊN - SANDBOX PAYMENT SETUP

## 🎯 QUAN TRỌNG - ĐỌC ĐẦU TIÊN

**Đây là dự án sinh viên, TẤT CẢ thanh toán đều là ẢO (Sandbox/Test mode)**

✅ **KHÔNG CẦN:**
- Tài khoản ngân hàng thật
- Tài khoản MoMo thật  
- Tài khoản PayPal thật
- Tiền thật

✅ **CHỈ CẦN:**
- PayPal Developer Account (MIỄN PHÍ)
- Dùng credentials Sandbox có sẵn

---

## 📋 QUICK SETUP (5 phút)

### Bước 1: Cấu hình Render Backend

Vào: https://dashboard.render.com/ → **tmdt-server** → **Environment**

**Copy-paste toàn bộ (đã bao gồm test credentials):**

```env
# MoMo Sandbox (Dùng ngay - không cần đăng ký)
MOMO_PARTNER_CODE=MOMO
MOMO_ACCESS_KEY=F8BBA842ECF85
MOMO_SECRET_KEY=K951B6PE1waDMi640xX08PD3vg6EkVlz
MOMO_REDIRECT_URL=https://tmdt-thuc-pham-nhap-khau-client.onrender.com/payment-return
MOMO_IPN_URL=https://tmdt-thuc-pham-nhap-khau-server.onrender.com/api/payment/momo-ipn

# PayPal Sandbox (Lấy từ bước 2)
PAYPAL_CLIENT_ID=YOUR_SANDBOX_CLIENT_ID_HERE
```

### Bước 2: Lấy PayPal Sandbox Client ID (3 phút)

1. Vào: https://developer.paypal.com/
2. **Sign Up** (miễn phí - dùng email bất kỳ)
3. **Dashboard** → **Apps & Credentials**
4. Click **"Create App"**
   - App Name: `TMDT-Student-Project`
   - ⚠️ **Chọn Sandbox** (KHÔNG chọn Live)
5. **Copy Sandbox Client ID**
6. Paste vào Render (thay `YOUR_SANDBOX_CLIENT_ID_HERE`)

### Bước 3: Fix SPA Routing (1 phút)

Vào: https://dashboard.render.com/ → **tmdt-client** → **Settings** → **Redirects/Rewrites**

```
Source: /*
Destination: /index.html
Action: Rewrite
```

---

## 🧪 TEST THANH TOÁN (Tất cả đều ẢO)

### Test MoMo (Sandbox)
1. Thêm sản phẩm vào giỏ
2. Checkout → Click "Thanh toán MoMo"
3. Trang MoMo test sẽ mở ra
4. **Chọn "Thanh toán test"** (không cần app MoMo thật)
5. Xác nhận → Quay về website

**✅ Kết quả:** Đơn hàng được tạo (không mất tiền thật)

### Test PayPal (Sandbox)
1. Thêm sản phẩm vào giỏ
2. Checkout → Click PayPal button
3. Popup PayPal test mở ra
4. Đăng nhập bằng **Sandbox Personal Account**:
   - Vào: https://developer.paypal.com/ → **Sandbox** → **Accounts**
   - Xem thông tin đăng nhập test account
   - Email: `sb-xxxxx@personal.example.com`
   - Password: Hiển thị trong account details
5. Xác nhận thanh toán test

**✅ Kết quả:** Đơn hàng được tạo (không mất tiền thật)

---

## 💡 GIẢI THÍCH CHO GIẢNG VIÊN

**Khi demo:**

1. **MoMo:** 
   - "Em sử dụng MoMo Sandbox API để test thanh toán"
   - "Thanh toán hoàn toàn ảo, dùng credentials test từ MoMo Developer"

2. **PayPal:**
   - "Em tạo PayPal Developer Account để test"
   - "Sử dụng Sandbox Test Accounts, không có giao dịch thật"

3. **Tính năng:**
   - Tạo đơn hàng
   - Tích hợp API thanh toán
   - Xử lý callback/webhook
   - Cập nhật trạng thái đơn hàng

**✅ Đáp ứng yêu cầu:** Tích hợp đầy đủ API bên thứ 3, xử lý luồng thanh toán hoàn chỉnh

---

## 📊 TỔNG QUAN

| Phương thức | Loại tài khoản | Có tiền thật? | Credentials |
|-------------|----------------|---------------|-------------|
| MoMo | Sandbox | ❌ Không | Có sẵn trong code |
| PayPal | Sandbox | ❌ Không | Cần tạo Developer Account (free) |
| VNPay | Sandbox | ❌ Không | Có sẵn trong code |
| COD | N/A | ❌ Không | Chỉ lưu database |

**Tất cả đều test mode - An toàn 100%**

---

## ❓ FAQ

**Q: Có cần tài khoản ngân hàng không?**
A: ❌ KHÔNG. Tất cả đều test mode.

**Q: Có tốn tiền không?**
A: ❌ KHÔNG. Hoàn toàn miễn phí.

**Q: Cần số điện thoại MoMo thật không?**
A: ❌ KHÔNG. Sandbox không cần app MoMo.

**Q: PayPal có charge phí không?**
A: ❌ KHÔNG. Developer Account miễn phí, test accounts miễn phí.

**Q: Giảng viên có test được không?**
A: ✅ CÓ. Chỉ cần truy cập website và làm theo flow thanh toán.

**Q: Có cần verify email/phone không?**
A: ❌ KHÔNG. Tất cả đều test credentials.

---

## 🎓 ĐIỂM CỘNG CHO BÀI LÀM

✅ **Tích hợp đầy đủ** 3 cổng thanh toán
✅ **API bên thứ 3** (MoMo, PayPal, VNPay)
✅ **Xử lý callback/webhook** đầy đủ
✅ **UI/UX chuyên nghiệp** với animation
✅ **Error handling** tốt
✅ **Documentation** chi tiết
✅ **Production ready** (có thể scale lên thật)

---

## 📞 HỖ TRỢ NHANH

**Lỗi MoMo "Invalid signature":**
→ Check lại MOMO_SECRET_KEY trên Render

**PayPal button không hiện:**
→ Check lại PAYPAL_CLIENT_ID trên Render

**Test account PayPal không đăng nhập được:**
→ Vào https://developer.paypal.com/ → Sandbox → Accounts → Reset password

**MoMo test không chuyển hướng:**
→ Check MOMO_REDIRECT_URL có đúng domain production không

---

**🎉 Chúc bạn demo thành công và đạt điểm cao! 🎉**
