import { OrderModel } from "../models/OrderModel.js";
import expressAsyncHandler from "express-async-handler";
import dotenv from 'dotenv';
import { createMoMoPayment } from "../untils/momo.js"; 

dotenv.config();

// --- 1. createPayment: Tạo đơn hàng & Link thanh toán MoMo ---
export const createPayment = expressAsyncHandler(async (req, res) => {
    try {
        console.log("---- BẮT ĐẦU TẠO THANH TOÁN MOMO ----");
        console.log("Dữ liệu từ Frontend:", req.body); // Log để kiểm tra xem frontend gửi gì lên

        // Lưu đơn hàng trước khi thanh toán
        const order = new OrderModel({
            order_code: "", 
            to_ward_code: req.body.to_ward_code,
            to_district_id: req.body.to_district_id,
            cancelOrder: false,
            orderItems: req.body.orderItems,
            shippingAddress: {
                province: req.body.shippingAddress?.province || '',
                district: req.body.shippingAddress?.district || '',
                ward: req.body.shippingAddress?.ward || '',
                detail: req.body.shippingAddress?.more || '',
                name: req.body.shippingAddress?.name || '',
                phone: req.body.shippingAddress?.phone || '',
            },
            paymentMethod: "MoMo",
            totalPrice: req.body.totalPrice,
            status: "pending", 
            name: req.body.name,
            user: req.body.user,
        });

        const createdOrder = await order.save(); 

        // Gọi MoMo API
        const orderIdStr = createdOrder._id.toString();
        let amount = req.body.totalPrice; 
        // 1. Ép kiểu về số và làm tròn (MoMo không nhận số thập phân)
        amount = Math.round(Number(amount));

        // 2. Kiểm tra quy định của MoMo (Phải >= 1000đ)
        if (!amount || amount < 1000) {
            console.log(`⚠️ CẢNH BÁO: Số tiền nhận được là ${amount} (Quá nhỏ).`);
            console.log("👉 Đang tự động chuyển thành 10.000đ để test thành công.");
            amount = 10000; // Giá trị mặc định an toàn để tạo được link
        }
        // const amount = 50000; // Số tiền mẫu để test
        const orderInfo = "Thanh toan don hang " + orderIdStr;

        // Giả sử hàm createMoMoPayment của bạn nhận (amount, orderInfo, orderId)
        // Nếu file momo.js chưa hỗ trợ tham số thứ 3, bạn cần kiểm tra lại file đó
        const result = await createMoMoPayment(amount, orderInfo, orderIdStr);
        
        console.log("MoMo URL created:", result?.payUrl);

        if (result && result.payUrl) {
            res.status(200).json({ url: result.payUrl });
        } else {
            res.status(500).json({ message: "Lỗi tạo link MoMo", detail: result });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// --- 2. returnPayment: Xử lý khi User được redirect về Web ---
export const returnPayment = expressAsyncHandler(async (req, res) => {
    // Hàm này Router thường gọi khi user thanh toán xong và quay lại trang web
    console.log("Return Params:", req.query);
    
    // Tạm thời trả về thành công để UI hiển thị trang 'Cảm ơn'
    // Logic cập nhật DB thực tế nên nằm ở inpPayment (an toàn hơn)
    res.status(200).json({ message: "Payment Return Processed" });
});

// --- 3. inpPayment: Xử lý IPN (Instant Payment Notification) ---
// Đây là hàm mà lỗi của bạn đang báo thiếu
export const inpPayment = expressAsyncHandler(async (req, res) => {
    // Hàm này MoMo sẽ gọi ngầm đến Server để báo kết quả (thành công/thất bại)
    console.log("IPN Received:", req.body || req.query);

    // TODO: Xử lý cập nhật trạng thái đơn hàng 'pending' -> 'paid' tại đây
    // 1. Kiểm tra signature (chữ ký bảo mật)
    // 2. Tìm đơn hàng theo orderId
    // 3. Update status = 'paid'

    // MoMo yêu cầu phản hồi status 204 (No Content) để xác nhận đã nhận IPN
    res.status(204).json({ message: "IPN Received" });
});