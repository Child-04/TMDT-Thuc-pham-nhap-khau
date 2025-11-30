import axios from "axios";
import { BASE_URL } from '../constants/UserConstant';

// Service để gọi API cập nhật thông tin người dùng
export const updateUserProfile = async (userData) => {
  try {
    // Lấy token từ localStorage
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = userInfo?.token; // Kiểm tra xem có token hay không

    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    // Gọi API với token và dữ liệu cập nhật, sử dụng BASE_URL
    const { data } = await axios.put(
      `${BASE_URL}/user/profile`, // Sử dụng BASE_URL thống nhất
      userData,
      config
    );
    return data;
  } catch (error) {
    throw new Error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};
