import React from "react";
import { useSelector } from 'react-redux';

export default function VnPay(props) {
    // 1. Nhận dữ liệu từ Component Cha
    const { 
        chooseProvince, 
        chooseDistrict, 
        chooseWard, 
        getValues 
    } = props;

    // 2. Lấy dữ liệu từ Redux Store
    const cart = useSelector((state) => state.cart);
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const amount = cart.cartItems.reduce(
        (total, item) => total + item.qty * item.salePrice, 
        0
    );

    const handleMoMoPayment = async () => {
        // --- VALIDATION ---
        if (!userInfo) {
            alert("Bạn cần đăng nhập để thanh toán.");
            return;
        }

        const detailAddress = getValues("more"); // Lấy số nhà

        // Kiểm tra xem đã chọn đủ địa chỉ chưa
        if (
            !chooseProvince || 
            !chooseDistrict || chooseDistrict.name === "Quận / Huyện" || 
            !chooseWard || chooseWard.name === "Phường / Xã" ||
            !detailAddress
        ) {
            alert("Vui lòng chọn đầy đủ địa chỉ (Tỉnh, Huyện, Xã, Số nhà)!");
            return; // Dừng lại, không gửi API
        }

        // --- CHUẨN BỊ DỮ LIỆU ---
        const orderData = {
            order_code: "",
            // Đảm bảo chooseWard/District ở file Cha có thuộc tính code/id
            to_ward_code: chooseWard.code || chooseWard.id || "0", 
            to_district_id: chooseDistrict.DistrictID || chooseDistrict.id || 0,
            cancelOrder: false,
            orderItems: cart.cartItems,
            shippingAddress: {
                province: chooseProvince.name,
                district: chooseDistrict.name,
                ward: chooseWard.name,
                detail: detailAddress,
                name: userInfo.name,
                phone: userInfo.phone || "",
            },
            paymentMethod: "MoMo",
            totalPrice: amount,
            status: "pending",
            name: userInfo.name,
            user: userInfo._id,
        };

        // --- GỌI API ---
        try {
            const res = await fetch("http://localhost:4000/api/payment/momo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${userInfo.token}`,
                },
                body: JSON.stringify(orderData),
            });

            const data = await res.json();

            if (res.ok && data.url) {
                window.location.href = data.url; // Chuyển hướng sang MoMo
            } else {
                alert("Lỗi server: " + (data.message || data.error));
            }
        } catch (error) {
            console.error("Lỗi thanh toán:", error);
            alert("Không thể kết nối tới server.");
        }
    };

    return (
        <div className="border p-4 cursor-pointer hover:bg-gray-100 text-center"
             onClick={handleMoMoPayment}>
            <img
                src="https://developers.momo.vn/v3/resources/logo-momo.png"
                alt="Thanh toán qua MoMo"
                className="w-40 mx-auto"
                style={{ maxWidth: "150px" }} 
            />
        </div>
    );
}