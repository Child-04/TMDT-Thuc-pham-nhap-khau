import express from "express";
// Import các hàm xử lý từ Controller
import {
  createPayment,
  returnPayment,
  inpPayment,
} from "../controllers/PaymentController.js";

const PaymentRouter = express.Router();

// --- NHÓM 1: CÁC ROUTE CHO MOMO (Dựa trên code cũ của bạn) ---
// Thay vì dùng require (PaymentController.createPayment), ta dùng hàm đã import trực tiếp
PaymentRouter.post("/momo", createPayment);

// Route IPN (MoMo gọi ngầm): Trỏ về hàm inpPayment đã viết trong Controller
PaymentRouter.post("/momo-ipn", inpPayment);

// // --- NHÓM 2: CÁC ROUTE CHUẨN (Logic VNPay cũ) ---
// // Route tạo thanh toán chung
// PaymentRouter.post("/create", createPayment);

// // Route xử lý khi user thanh toán xong và quay lại web
// PaymentRouter.get("/vnpay_return", returnPayment);

// // Route IPN (Dành cho VNPay hoặc cấu hình khác nếu cần)
// PaymentRouter.get("/vnpay_ipn", inpPayment);

// Export mặc định (Chuẩn ES Module)
export default PaymentRouter;
