# HƯỚNG DẪN FIX LỖI 404 KHI F5 TRÊN RENDER (SPA ROUTING)

## ✅ Vấn đề
Khi truy cập trực tiếp URL như `https://tmdt-thuc-pham-nhap-khau-client.onrender.com/detail/thit-bo-uc` hoặc F5 tại trang đó → Bị lỗi 404.

## 🔍 Nguyên nhân
- React Router chạy ở phía client (browser)
- Khi F5, browser gửi request đến server Render tìm file `/detail/thit-bo-uc`
- Server không có file này → trả về 404
- Cần cấu hình server luôn trả về `index.html` cho mọi route

## 🛠️ GIẢI PHÁP CHO RENDER STATIC SITE

### ⚠️ LƯU Ý QUAN TRỌNG
Render Static Site **KHÔNG tự động đọc** file `_redirects` hay `netlify.toml` như Netlify/Vercel. Bạn **BẮT BUỘC** phải cấu hình thủ công trên Dashboard.

---

## 📋 CÁCH FIX ĐÚNG (Làm theo từng bước)

### Bước 1: Vào Render Dashboard
1. Truy cập: https://dashboard.render.com/
2. Đăng nhập tài khoản của bạn
3. Chọn service **tmdt-client** (frontend static site)

### Bước 2: Thêm Rewrite Rule
1. Click vào service **tmdt-client**
2. Chọn tab **"Redirects/Rewrites"** (hoặc **"Settings"** → **"Redirects/Rewrites"**)
3. Click nút **"Add Rule"** hoặc **"Add Rewrite Rule"**

### Bước 3: Cấu hình Rule
Điền thông tin như sau:

```
Source: /*
Destination: /index.html
Action: Rewrite (NOT Redirect)
```

**CHÚ Ý:**
- **Source**: `/*` (dấu * nghĩa là match tất cả các đường dẫn)
- **Destination**: `/index.html` (luôn trả về index.html)
- **Action**: Chọn **"Rewrite"** (KHÔNG phải "Redirect 301/302")

### Bước 4: Save và Redeploy
1. Click **"Save Changes"**
2. Render sẽ tự động redeploy service
3. Đợi khoảng 2-3 phút để deploy hoàn tất

### Bước 5: Test
Sau khi deploy xong, thử:
1. Truy cập: `https://tmdt-thuc-pham-nhap-khau-client.onrender.com/detail/thit-bo-uc`
2. Nhấn F5 nhiều lần
3. Kiểm tra xem có còn lỗi 404 không

---

## 🖼️ Hình ảnh minh họa cấu hình

```
╔════════════════════════════════════════════╗
║  Render Dashboard - Redirects/Rewrites    ║
╠════════════════════════════════════════════╣
║                                            ║
║  Source:         /*                        ║
║  Destination:    /index.html               ║
║  Action:         Rewrite                   ║
║                                            ║
║            [Save Changes]                  ║
║                                            ║
╚════════════════════════════════════════════╝
```

---

## 🔄 NẾU VẪN CHƯA FIX ĐƯỢC

### Option 1: Deploy từ Blueprint (render.yaml)
Nếu Dashboard không có option "Redirects/Rewrites", bạn cần:

1. **Xóa service cũ** trên Render Dashboard
2. **Tạo service mới** từ "Blueprint" (chọn file `render.yaml`)
3. Render sẽ tự động apply cấu hình routing từ `render.yaml`

File `render.yaml` đã có sẵn ở thư mục gốc repo:
```yaml
services:
  - type: web
    name: tmdt-client
    env: static
    buildCommand: cd client && npm install && npm run build
    staticPublishPath: ./client/build
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

### Option 2: Chuyển sang dùng Web Service (Node.js)
Thay vì Static Site, deploy frontend bằng Web Service với `serve`:

1. Thêm vào `client/package.json`:
```json
{
  "scripts": {
    "start:prod": "serve -s build -l 3000"
  },
  "dependencies": {
    "serve": "^14.2.0"
  }
}
```

2. Cấu hình trên Render:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start:prod`
   - **Environment**: Node

---

## 📝 KIỂM TRA LẠI

Checklist trước khi test:
- [ ] File `_redirects` có trong `client/public/` ✅
- [ ] File `_redirects` được copy vào `client/build/` khi build ✅
- [ ] Đã cấu hình Rewrite Rule trên Render Dashboard ❓ (BẠN CẦN LÀM)
- [ ] Service đã redeploy sau khi cấu hình ❓
- [ ] Test trực tiếp URL: `/detail/thit-bo-uc` ❓

---

## 🎯 KẾT LUẬN

**File `_redirects` và `render.yaml` chỉ là tài liệu tham khảo**. Render Static Site yêu cầu **cấu hình thủ công trên Dashboard**.

Sau khi làm theo hướng dẫn trên, lỗi 404 khi F5 sẽ được fix hoàn toàn.

Nếu vẫn gặp vấn đề, chụp màn hình phần Settings/Redirects trên Render Dashboard để tôi xem và hỗ trợ tiếp.
