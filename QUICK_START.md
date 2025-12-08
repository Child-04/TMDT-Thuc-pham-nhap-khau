# 🚀 QUICK START - RENDER DEPLOYMENT CHECKLIST

## 📋 BƯỚC 1: CẤU HÌNH TRÊN RENDER (5 phút)

### Backend Environment Variables
Vào: https://dashboard.render.com/ → **tmdt-server** → **Environment**

**Copy paste tất cả vào:**

```env
MOMO_PARTNER_CODE=MOMO
MOMO_ACCESS_KEY=F8BBA842ECF85
MOMO_SECRET_KEY=K951B6PE1waDMi640xX08PD3vg6EkVlz
MOMO_REDIRECT_URL=https://tmdt-thuc-pham-nhap-khau-client.onrender.com/payment-return
MOMO_IPN_URL=https://tmdt-thuc-pham-nhap-khau-server.onrender.com/api/payment/momo-ipn
PAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID_HERE
```

⚠️ **Thay `YOUR_PAYPAL_CLIENT_ID_HERE` bằng Client ID thật từ PayPal Developer**

---

## 📋 BƯỚC 2: LẤY PAYPAL CLIENT ID (3 phút)

1. Vào: https://developer.paypal.com/
2. Đăng nhập
3. **Dashboard** → **Apps & Credentials**
4. Click **"Create App"**
5. Nhập tên: `TMDT-App`
6. Chọn **Sandbox**
7. Click **Create**
8. **Copy Client ID** hiển thị
9. Paste vào Render Environment Variables

---

## ~~📋 BƯỚC 3: ĐĂNG KÝ MOMO BUSINESS~~ (KHÔNG CẦN - Dự án sinh viên)

**❌ BỎ QUA BƯỚC NÀY**

**✅ CHO DỰ ÁN SINH VIÊN:**
- Dùng credentials **SANDBOX** đã có sẵn (đã điền ở Bước 1)
- **KHÔNG CẦN** đăng ký MoMo Business
- Thanh toán hoàn toàn ảo, đủ để demo và nộp bài

---

## 📋 BƯỚC 4: FIX LỖI SPA ROUTING (1 phút)

Vào: https://dashboard.render.com/ → **tmdt-client** (frontend)

### Option A: Thêm Rewrite Rule (Khuyên dùng)
1. **Settings** → **Redirects/Rewrites**
2. Click **"Add Rule"**
3. Điền:
   ```
   Source: /*
   Destination: /index.html
   Action: Rewrite
   ```
4. **Save**

### Option B: Nếu không có option "Redirects"
Xóa service cũ → Tạo mới từ **"Blueprint"** → Chọn file `render.yaml` từ repo

---

## 📋 BƯỚC 5: TEST (2 phút)

### Test Frontend:
```
https://tmdt-thuc-pham-nhap-khau-client.onrender.com
```

1. ✅ F5 tại trang `/detail/xxx` không bị 404
2. ✅ Thêm sản phẩm vào giỏ
3. ✅ Checkout → Chọn địa chỉ (dropdown hoạt động)
4. ✅ Thử thanh toán MoMo (sẽ mở trang MoMo)
5. ✅ Thử thanh toán PayPal (sẽ mở popup PayPal)

### Test Backend:
```
https://tmdt-thuc-pham-nhap-khau-server.onrender.com/products
```
Phải trả về danh sách sản phẩm (JSON)

---

## 🎯 TỔNG QUAN TÍNH NĂNG

| Tính năng | Trạng thái | Ghi chú |
|-----------|------------|---------|
| Dropdown địa chỉ | ✅ Fixed | Tỉnh/Huyện/Xã hoạt động |
| MoMo Payment | ✅ Hoàn chỉnh | Test với demo credentials |
| PayPal Payment | ✅ Hoàn chỉnh | Cần Client ID thật |
| VNPay Payment | ✅ Sẵn có | Đã tích hợp từ trước |
| COD Payment | ✅ Sẵn có | Thanh toán khi nhận hàng |
| SPA Routing | ✅ Fixed | F5 không bị 404 |

---

## 📚 TÀI LIỆU THAM KHẢO

- **Chi tiết đầy đủ:** `PAYMENT_SETUP_GUIDE.md`
- **Báo cáo hoàn thành:** `PAYMENT_COMPLETION_REPORT.md`
- **Fix lỗi F5:** `FIX_404_RENDER.md`

---

## ⚡ TÓM TẮT NHANH

**Đã làm:**
✅ Fix dropdown địa chỉ
✅ Tích hợp MoMo hoàn chỉnh
✅ Fix PayPal với số tiền thật
✅ Tạo trang Payment Return
✅ Cập nhật UI thanh toán
✅ Documentation đầy đủ

**Cần làm trên Render:**
1. ⚠️ Thêm Environment Variables (MoMo + PayPal)
2. ⚠️ Lấy PayPal Client ID
3. ⚠️ Fix SPA Routing (Add Rewrite Rule)
4. ✅ Test thanh toán

**Thời gian:** ~10 phút

---

## 🆘 TROUBLESHOOTING NHANH

### Lỗi: PayPal button không hiện
→ Chưa set `PAYPAL_CLIENT_ID` trên Render

### Lỗi: MoMo "Invalid signature"
→ Check lại `MOMO_SECRET_KEY`

### Lỗi: F5 bị 404
→ Chưa thêm Rewrite Rule trên Render

### Lỗi: Dropdown không hiện
→ Đã fix, pull code mới và redeploy

---

**🎉 Sau khi hoàn thành checklist trên, website sẽ hoạt động đầy đủ!**
