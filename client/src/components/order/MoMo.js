import React from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from '../../constants/UserConstant';
import './MoMo.css';

export default function MoMo(props) {
    const { 
        chooseProvince, 
        chooseDistrict, 
        chooseWard, 
        getValues 
    } = props;

    const cart = useSelector((state) => state.cart);
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    
    const amount = cart.cartItems.reduce(
        (total, item) => total + item.qty * item.salePrice, 
        0
    );

    const handleMoMoPayment = async () => {
        // Validation
        if (!userInfo) {
            alert("Bạn cần đăng nhập để thanh toán.");
            return;
        }

        const name = getValues("name");
        const phone = getValues("phone");
        const detailAddress = getValues("more");

        // Kiểm tra đầy đủ thông tin
        if (!name || !phone) {
            alert("Vui lòng nhập đầy đủ họ tên và số điện thoại!");
            return;
        }

        if (
            !chooseProvince || 
            !chooseDistrict || chooseDistrict.name === "Quận / Huyện" || 
            !chooseWard || chooseWard.name === "Phường / Xã" ||
            !detailAddress
        ) {
            alert("Vui lòng chọn đầy đủ địa chỉ (Tỉnh/Thành phố, Quận/Huyện, Phường/Xã, Số nhà)!");
            return;
        }

        if (amount < 1000) {
            alert("Số tiền thanh toán phải từ 1.000đ trở lên!");
            return;
        }

        // Chuẩn bị dữ liệu đơn hàng
        const orderData = {
            order_code: "",
            to_ward_code: chooseWard.id || chooseWard.code || "0", 
            to_district_id: chooseDistrict.id || 0,
            cancelOrder: false,
            orderItems: cart.cartItems,
            shippingAddress: {
                province: chooseProvince.name,
                district: chooseDistrict.name,
                ward: chooseWard.name,
                detail: detailAddress,
                name: name,
                phone: phone,
            },
            paymentMethod: "MoMo",
            totalPrice: amount,
            status: "pending",
            name: name,
            user: userInfo._id,
        };

        console.log("Sending MoMo payment request:", orderData);

        try {
            const res = await fetch(`${BASE_URL}/api/payment/momo`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${userInfo.token}`,
                },
                body: JSON.stringify(orderData),
            });

            const data = await res.json();
            console.log("MoMo response:", data);

            if (res.ok && data.url) {
                // Chuyển hướng sang trang thanh toán MoMo
                window.location.href = data.url;
            } else {
                alert("Lỗi tạo thanh toán MoMo: " + (data.message || data.error || "Unknown error"));
            }
        } catch (error) {
            console.error("Lỗi thanh toán MoMo:", error);
            alert("Không thể kết nối tới server. Vui lòng thử lại!");
        }
    };

    return (
        <div className="momo-payment-button" onClick={handleMoMoPayment}>
            <img
                src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Square.png"
                alt="Thanh toán qua MoMo"
                className="momo-logo"
            />
            <span className="momo-text">Thanh toán MoMo</span>
        </div>
    );
}
