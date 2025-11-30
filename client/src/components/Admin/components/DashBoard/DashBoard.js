import React, { useEffect, useState } from "react";
import {
  BellOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  DollarCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { DatePicker, Button } from "antd"; // Import DatePicker và Button từ antd
import "./DashBoard.css";
import ChartDashBoard from "./ChartDashBoard";
import axios from "axios";
import { formatPrice } from "../../../../untils";

const { RangePicker } = DatePicker; // Khai báo RangePicker

export default function DashBoard() {
  const [stats, setStats] = useState({
    users: 0,
    orders: 0,
    products: 0,
    totalPrice: 0,
  });
  const [dates, setDates] = useState([null, null]); // State để lưu ngày chọn
  const [revenueData, setRevenueData] = useState([]); // State để lưu doanh thu theo ngày

  // Gọi API để lấy số lượng user, order, product
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/counts`
        );
        setStats({
          users: data.users,
          orders: data.orders,
          products: data.products,
          totalPrice: data.totalPrice,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  // Hàm để gọi API tính doanh thu theo khoảng thời gian
  const fetchRevenueByDate = async (dates) => {
    if (dates[0] && dates[1]) {
      const startDate = dates[0].format("YYYY-MM-DD");
      const endDate = dates[1].format("YYYY-MM-DD");
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/counts/revenue?startDate=${startDate}&endDate=${endDate}`
        );
        // Cập nhật doanh thu trả về vào state
        setRevenueData(data); // Dữ liệu trả về là doanh thu theo ngày
      } catch (error) {
        console.error("Error fetching revenue:", error);
      }
    }
  };

  const styles = {
    dashboard: {
      padding: "20px",
      backgroundColor: "#f8f9fa",
    },
    topSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    searchForm: {
      display: "flex",
      alignItems: "center",
    },
    searchInput: {
      padding: "5px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    content: {
      display: "flex",
      alignItems: "center",
    },
    avatarImg: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
    },
    middleSection: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      marginBottom: "20px",
    },
    statContent: {
      backgroundColor: "white",
      padding: "15px",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    },
    statIcon: {
      fontSize: "30px",
      marginBottom: "10px",
    },
    statTotal: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    datePickerSection: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "flex-start",
      gap: "10px",
    },
    responsive: {
      '@media (max-width: 768px)': {
        middleSection: {
          gridTemplateColumns: 'repeat(2, 1fr)',
        }
      },
      '@media (max-width: 576px)': {
        middleSection: {
          gridTemplateColumns: '1fr',
        }
      }
    }
  };

  return (
    <section id="dashboard" style={styles.dashboard}>
      {/* SEO Content Block */}
      <div style={{ display: 'none' }} className="seo-content-dashboard">
        <h1>Dashboard quản trị thực phẩm nhập khẩu</h1>
        <p>Trang tổng quan quản trị cho hệ thống thương mại điện tử thực phẩm nhập khẩu cao cấp. Theo dõi tất cả chỉ số kinh doanh quan trọng, phân tích xu hướng bán hàng và quản lý hiệu quả hoạt động kinh doanh trong một giao diện trực quan.</p>
        
        <h2>Thống kê tổng quan kinh doanh</h2>
        <p>Dashboard cung cấp cái nhìn tổng quan về tình hình kinh doanh với các chỉ số quan trọng như tổng số sản phẩm, đơn hàng, khách hàng và doanh thu. Dữ liệu được cập nhật realtime giúp người quản trị nắm bắt tình hình kinh doanh một cách kịp thời và chính xác nhất.</p>
        
        <h3>Phân tích doanh thu chi tiết</h3>
        <p>Hệ thống biểu đồ doanh thu theo thời gian giúp theo dõi xu hướng tăng trưởng, so sánh hiệu quả kinh doanh giữa các khoảng thời gian khác nhau. Tính năng lọc doanh thu theo ngày, tuần, tháng và năm giúp phân tích sâu hơn về hiệu quả kinh doanh.</p>
        
        <h3>Quản lý đơn hàng hiệu quả</h3>
        <p>Theo dõi số lượng đơn hàng mới, đang xử lý, đã giao thành công và các đơn hàng có vấn đề. Thống kê này giúp đánh giá hiệu quả của quy trình xử lý đơn hàng và chất lượng dịch vụ khách hàng.</p>
        
        <h3>Phân tích khách hàng và sản phẩm</h3>
        <p>Thống kê số lượng khách hàng mới, khách hàng thường xuyên và phân tích hành vi mua sắm. Theo dõi hiệu quả của từng sản phẩm, sản phẩm bán chạy nhất và xu hướng tiêu thụ để đưa ra quyết định kinh doanh phù hợp.</p>
      </div>
      
      <div style={styles.topSection}>
        <div style={styles.searchForm}>
          <form>
            <input placeholder="Search ..." style={styles.searchInput} />
            <span>
              <SearchOutlined />
            </span>
          </form>
        </div>
        <div style={styles.content}>
          <li className="dashboard-top-content-avatar">
            <img
              src="https://res.cloudinary.com/caokhahieu/image/upload/v1626334932/gediogbkwlg85kbbsamq.jpg"
              alt="avatar"
              style={styles.avatarImg}
            />
            <span>Nông sản Việt</span>
          </li>
          <li className="dashboard-top-content-bell">
            <BellOutlined />
          </li>
        </div>
      </div>

      <div style={{ ...styles.middleSection, ...styles.responsive.middleSection }}>
        <div style={styles.statContent}>
          <li>
            <div style={styles.statIcon}>
              <ShoppingOutlined />
            </div>
            <div>
              <span style={styles.statTotal}>{stats.products}</span>
              <span>Sản phẩm</span>
            </div>
          </li>
        </div>
        <div style={styles.statContent}>
          <li>
            <div style={styles.statIcon}>
              <ShoppingCartOutlined />
            </div>
            <div>
              <span style={styles.statTotal}>{stats.orders}</span>
              <span>Đơn hàng</span>
            </div>
          </li>
        </div>
        <div style={styles.statContent}>
          <li>
            <div style={styles.statIcon}>
              <DollarCircleOutlined />
            </div>
            <div>
              <span style={styles.statTotal}>{formatPrice(stats.totalPrice)}đ</span>
              <span>Doanh thu</span>
            </div>
          </li>
        </div>
        <div style={styles.statContent}>
          <li>
            <div style={styles.statIcon}>
              <FileTextOutlined />
            </div>
            <div>
              <span style={styles.statTotal}>{stats.users}</span>
              <span>Khách hàng</span>
            </div>
          </li>
        </div>
      </div>

      <ChartDashBoard revenueData={revenueData} /> {/* Truyền revenueData vào ChartDashBoard */}

      <div style={styles.datePickerSection}>
        <RangePicker
          onChange={(dates) => setDates(dates)}
          format="YYYY-MM-DD"
        />
        <Button type="primary" onClick={() => fetchRevenueByDate(dates)}>
          Xem Doanh Thu
        </Button>
      </div>
    </section>
  );
}
