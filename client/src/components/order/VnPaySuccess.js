import React, { useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from '../../constants/UserConstant';
import { useLocation, Link } from "react-router-dom";
import { CheckOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { CART_EMPTY } from '../../constants/CartConstant';

export default function VnPaySuccess() {
  const location = useLocation();
  const dispatch = useDispatch();

  // 1. Lấy các tham số từ URL do MoMo trả về
  // URL sẽ có dạng: ...?partnerCode=...&resultCode=0&message=Success...
  const query = new URLSearchParams(location.search);
  const resultCode = query.get("resultCode");
  const message = query.get("message"); // Lấy thông báo lỗi nếu có

  useEffect(() => {

    // 2. Kiểm tra resultCode = 0 (Nghĩa là Thành công)
    if (resultCode == 0) {
      // Xóa giỏ hàng trong Redux
      // (Lưu ý: Nếu bạn có file constants, hãy import CART_EMPTY thay vì gõ chuỗi cứng)
      dispatch({ type: 'CART_EMPTY' }); 
      
      // Xóa giỏ hàng trong LocalStorage để khi F5 không bị hiện lại
      localStorage.removeItem("cartItems");
    }
  }, [resultCode, dispatch]);

  // 3. Xử lý giao diện (Thành công / Thất bại)
  const isSuccess = resultCode == 0;

  return (
    <section id="order-success">
      <div className="order-success">
        {isSuccess ? (
          // --- GIAO DIỆN THÀNH CÔNG ---
          <>
            <span style={{ color: 'green' }}><CheckOutlined /></span>
            <p style={{ fontWeight: 'bold' }}>Đặt hàng thành công!</p>
            <p style={{ fontSize: '14px', color: '#555' }}>Cảm ơn bạn đã thanh toán qua MoMo</p>
            
            <div className="links">
              <Link to="/myOrder">Xem đơn hàng</Link>
              <Link to="/">Về trang chủ</Link>
            </div>
          </>
        ) : (
          // --- GIAO DIỆN THẤT BẠI ---
          <>
            <span style={{ color: 'red' }}><CloseCircleOutlined /></span>
            <p style={{ fontWeight: 'bold', color: 'red' }}>Thanh toán thất bại</p>
            <p style={{ fontSize: '14px', color: '#555' }}>{decodeURIComponent(message || "Giao dịch bị hủy hoặc lỗi")}</p>
            
            <div className="links">
              <Link to="/order">Thanh toán lại</Link>
              <Link to="/">Về trang chủ</Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}