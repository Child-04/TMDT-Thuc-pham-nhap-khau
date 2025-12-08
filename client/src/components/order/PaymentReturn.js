import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./PaymentReturn.css";

export default function PaymentReturn() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [paymentStatus, setPaymentStatus] = useState("processing");
    const [message, setMessage] = useState("Đang xử lý kết quả thanh toán...");

    useEffect(() => {
        // Lấy query parameters từ URL
        const urlParams = new URLSearchParams(window.location.search);
        
        // MoMo parameters
        const resultCode = urlParams.get("resultCode");
        const orderId = urlParams.get("orderId");
        const message = urlParams.get("message");

        console.log("Payment Return Params:", { resultCode, orderId, message });

        // Xử lý kết quả
        if (resultCode === "0") {
            // Thanh toán thành công
            setPaymentStatus("success");
            setMessage("Thanh toán thành công! Đơn hàng của bạn đang được xử lý.");
            
            // Clear cart
            dispatch({ type: "CART_EMTY" });
            localStorage.removeItem("cartItems");

            // Chuyển hướng sau 3 giây
            setTimeout(() => {
                history.push("/orderSuccess");
            }, 3000);
        } else {
            // Thanh toán thất bại
            setPaymentStatus("failed");
            setMessage(message || "Thanh toán thất bại. Vui lòng thử lại!");
            
            // Quay lại trang giỏ hàng sau 3 giây
            setTimeout(() => {
                history.push("/cart");
            }, 3000);
        }
    }, [history, dispatch]);

    return (
        <div className="payment-return-container">
            <div className="payment-return-card">
                {paymentStatus === "processing" && (
                    <div className="payment-processing">
                        <div className="spinner"></div>
                        <h2>Đang xử lý...</h2>
                        <p>{message}</p>
                    </div>
                )}
                
                {paymentStatus === "success" && (
                    <div className="payment-success">
                        <div className="success-icon">✓</div>
                        <h2>Thanh toán thành công!</h2>
                        <p>{message}</p>
                        <p className="redirect-text">Đang chuyển hướng...</p>
                    </div>
                )}
                
                {paymentStatus === "failed" && (
                    <div className="payment-failed">
                        <div className="failed-icon">✗</div>
                        <h2>Thanh toán thất bại</h2>
                        <p>{message}</p>
                        <button onClick={() => history.push("/cart")} className="retry-button">
                            Quay lại giỏ hàng
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
