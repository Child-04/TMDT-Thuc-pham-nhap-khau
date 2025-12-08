# 🔐 HƯỚNG DẪN TẠO MOMO TEST CREDENTIALS

## 🎯 NGUỒN GỐC CÁC MÃ HIỆN TẠI

Các mã bạn đang dùng:
```env
MOMO_PARTNER_CODE=MOMO
MOMO_ACCESS_KEY=F8BBA842ECF85
MOMO_SECRET_KEY=K951B6PE1waDMi640xX08PD3vg6EkVlz
```

**Nguồn:** Đây là credentials **DEMO PUBLIC** từ tài liệu MoMo Developer
**Link:** https://developers.momo.vn/v3/docs/payment/onboarding/test-instructions/

⚠️ **Vấn đề:**
- Mã này ai cũng có thể dùng (public demo)
- Nhiều người dùng chung → có thể bị conflict
- Không phải credentials riêng của bạn

---

## 🚀 CÁCH 1: TẠO TÀI KHOẢN MOMO DEVELOPER (MIỄN PHÍ - KHUYÊN DÙNG)

### Bước 1: Đăng ký tài khoản
1. Truy cập: https://developers.momo.vn/
2. Click **"Đăng ký"** ở góc phải trên
3. Điền form:
   ```
   Họ tên: [Tên của bạn]
   Email: [Email sinh viên hoặc cá nhân]
   Số điện thoại: [SĐT của bạn]
   Mật khẩu: [Tạo mật khẩu]
   ```
4. Click **"Đăng ký"**
5. Xác thực email (check hộp thư)

### Bước 2: Đăng nhập
1. Đăng nhập vào https://developers.momo.vn/
2. Vào **Dashboard**

### Bước 3: Tạo Test Merchant (Merchant thử nghiệm)
1. Click **"My Apps"** hoặc **"Ứng dụng của tôi"**
2. Click **"Create New App"** / **"Tạo ứng dụng mới"**
3. Điền thông tin:
   ```
   Tên ứng dụng: TMDT-Thuc-pham-nhap-khau
   Loại: Test/Sandbox
   Mô tả: Dự án TMDT - Thực phẩm nhập khẩu
   ```
4. Click **"Submit"** / **"Tạo"**

### Bước 4: Lấy credentials riêng
Sau khi tạo app, bạn sẽ nhận được:

```env
MOMO_PARTNER_CODE=MOMOXXXXXXXXXXX (Mã riêng của bạn)
MOMO_ACCESS_KEY=XXXXXXXXXXXXXXX (Key riêng của bạn)
MOMO_SECRET_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX (Secret riêng của bạn)
```

**✅ Đây là credentials RIÊNG của bạn, không ai khác có!**

### Bước 5: Cấu hình Redirect URL và IPN URL
Trong phần cài đặt app:
1. **Return URL (Redirect URL):**
   ```
   Local: http://localhost:3000/payment-return
   Production: https://tmdt-thuc-pham-nhap-khau-client.onrender.com/payment-return
   ```

2. **IPN URL (Webhook):**
   ```
   Local: http://localhost:4000/api/payment/momo-ipn
   Production: https://tmdt-thuc-pham-nhap-khau-server.onrender.com/api/payment/momo-ipn
   ```

3. Click **"Save"** / **"Lưu"**

---

## 🛠️ CÁCH 2: TẠO MOCK CREDENTIALS (CHO DEMO/OFFLINE)

Nếu không muốn đăng ký, bạn có thể tạo credentials giả để test offline:

### Bước 1: Tạo credentials giả
```env
# Mock credentials - CHỈ dùng cho demo offline
MOMO_PARTNER_CODE=MOMO_STUDENT_2024
MOMO_ACCESS_KEY=MOCK_KEY_TMDT_PROJECT
MOMO_SECRET_KEY=MOCK_SECRET_THIS_IS_A_DEMO_PROJECT_KEY
```

### Bước 2: Update code để bypass validation
Thêm vào `server/untils/momo.js`:

```javascript
export async function createMoMoPayment(amount, orderInfo) {
    const partnerCode = process.env.MOMO_PARTNER_CODE;
    const accessKey = process.env.MOMO_ACCESS_KEY;
    const secretkey = process.env.MOMO_SECRET_KEY;

    // 🔥 THÊM ĐOẠN NÀY - Mock mode cho demo
    if (partnerCode.includes('MOCK') || partnerCode.includes('STUDENT')) {
        console.log('🎭 MOCK MODE: Simulating MoMo payment...');
        return {
            resultCode: 0,
            payUrl: `http://localhost:3000/payment-return?resultCode=0&orderId=${Date.now()}&message=Mock+payment+success`,
            message: 'Mock payment created'
        };
    }
    // 🔥 KẾT THÚC MOCK MODE

    // Code gốc tiếp tục...
```

**⚠️ Lưu ý:**
- Cách này chỉ giả lập, không có thanh toán thật
- Chỉ dùng để demo offline cho giảng viên
- Không dùng được trên production

---

## 📊 SO SÁNH CÁC CÁCH

| Phương pháp | Ưu điểm | Nhược điểm | Khuyên dùng |
|-------------|---------|------------|-------------|
| **Demo Public** (hiện tại) | Dùng ngay, không cần đăng ký | Ai cũng dùng, không riêng tư | ⭐⭐ |
| **MoMo Developer** (Cách 1) | Credentials riêng, test thật, miễn phí | Cần đăng ký (5 phút) | ⭐⭐⭐⭐⭐ |
| **Mock Credentials** (Cách 2) | Không cần đăng ký, control hoàn toàn | Không test được flow thật | ⭐⭐⭐ |

---

## 🎓 KHUYẾN NGHỊ CHO DỰ ÁN SINH VIÊN

### Nếu nộp bài online/có internet:
✅ **Dùng Cách 1** (Đăng ký MoMo Developer)
- Credentials riêng, chuyên nghiệp
- Test được flow thanh toán thật
- Giảng viên có thể test được

### Nếu demo offline/không có internet:
✅ **Dùng Cách 2** (Mock Credentials)
- Không cần internet
- Control hoàn toàn flow
- Phù hợp demo trực tiếp

### Nếu gấp, không có thời gian:
✅ **Giữ nguyên Demo Public** (hiện tại)
- Dùng ngay được
- Đủ để demo cho giảng viên

---

## 🔄 CẬP NHẬT CREDENTIALS

Sau khi có credentials mới:

### 1. Local (.env file):
```bash
cd server
```

Sửa file `.env`:
```env
# Thay đổi 3 dòng này
MOMO_PARTNER_CODE=<MÃ_MỚI_CỦA_BẠN>
MOMO_ACCESS_KEY=<KEY_MỚI_CỦA_BẠN>
MOMO_SECRET_KEY=<SECRET_MỚI_CỦA_BẠN>
```

### 2. Production (Render):
1. Vào https://dashboard.render.com/
2. Chọn service **tmdt-server**
3. **Environment** → Edit 3 variables:
   ```
   MOMO_PARTNER_CODE = <MÃ_MỚI>
   MOMO_ACCESS_KEY = <KEY_MỚI>
   MOMO_SECRET_KEY = <SECRET_MỚI>
   ```
4. **Save** → Render auto redeploy

---

## 🧪 TEST SAU KHI ĐỔI CREDENTIALS

### Test 1: Kiểm tra log
```bash
# Start server
cd server
npm start

# Xem log khi tạo thanh toán
# Phải thấy dòng:
# "PartnerCode: MOMO_XXX" (mã mới của bạn)
```

### Test 2: Test thanh toán
1. Thêm sản phẩm vào giỏ
2. Click "Thanh toán MoMo"
3. Xem URL redirect:
   - Nếu có `payUrl` → Thành công
   - Nếu lỗi "Invalid signature" → Check lại SECRET_KEY

### Test 3: Test return
1. Thanh toán xong
2. Kiểm tra có redirect về `/payment-return`
3. Kiểm tra `resultCode=0` (thành công)

---

## 💡 LƯU Ý BẢO MẬT

1. **KHÔNG** push credentials lên GitHub public
2. Dùng `.gitignore` cho file `.env`
3. Dùng Environment Variables trên Render
4. Chỉ chia sẻ credentials trong nhóm (nếu làm nhóm)

---

## 📞 HỖ TRỢ

**Nếu gặp lỗi khi đăng ký:**
- Email support: developer@momo.vn
- Docs: https://developers.momo.vn/v3/docs/
- Hotline: 1900 5454 41

**Nếu test không thành công:**
1. Check log server (terminal)
2. Check Network tab (F12 trong browser)
3. Xem file `server/untils/momo.js` có log chi tiết

---

## ✅ CHECKLIST

- [ ] Đã hiểu nguồn gốc mã DEMO hiện tại
- [ ] Đã chọn phương pháp phù hợp (Cách 1, 2, hoặc giữ nguyên)
- [ ] Đã có credentials mới (nếu chọn Cách 1 hoặc 2)
- [ ] Đã update vào `.env` local
- [ ] Đã update vào Render Environment Variables
- [ ] Đã test thanh toán với credentials mới
- [ ] Đã kiểm tra payment return hoạt động

---

**Thời gian ước tính:**
- Cách 1 (Đăng ký): ~5-10 phút
- Cách 2 (Mock): ~3 phút
- Giữ nguyên: 0 phút

**Khuyến nghị:** Dùng Cách 1 để có trải nghiệm tốt nhất! 🚀
