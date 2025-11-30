import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  paginationProduct,
} from "../../../../actions/ProductAction";
import { Link } from "react-router-dom";
import ListProduct from "./ListProduct";
import "./AdminProduct.css";
import { AppstoreAddOutlined, ToolOutlined } from "@ant-design/icons";

function AdminProduct(props) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.allProduct.currentPage);
  const { products } = useSelector((state) => state.allProduct.product);

  useEffect(() => {
    dispatch(paginationProduct(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="admin-product">
      {/* SEO Content Block */}
      <div style={{ display: 'none' }} className="seo-content-admin-product">
        <h1>Quản lý sản phẩm thực phẩm nhập khẩu</h1>
        <p>Hệ thống quản lý sản phẩm chuyên nghiệp cho ngành thực phẩm nhập khẩu. Quản lý toàn diện thông tin sản phẩm, giá cả, tồn kho, xuất xứ và chất lượng để đảm bảo tiêu chuẩn cao nhất cho khách hàng.</p>
        
        <h2>Quản lý danh mục sản phẩm đa dạng</h2>
        <p>Hỗ trợ quản lý hàng ngàn sản phẩm thực phẩm nhập khẩu từ khắp thế giới. Phân loại theo nhiều tiêu chí như xuất xứ, loại thực phẩm, thương hiệu, giá cả và tình trạng tồn kho. Tính năng tìm kiếm và lọc sản phẩm giúp quản lý hiệu quả.</p>
        
        <h3>Quản lý thông tin sản phẩm chi tiết</h3>
        <p>Cập nhật đầy đủ thông tin sản phẩm bao gồm tên, mô tả, hình ảnh, giá bán, giá nhập, xuất xứ, nhà sản xuất, thành phần dinh dưỡng, hạn sử dụng và điều kiện bảo quản. Hỗ trợ upload nhiều hình ảnh và mô tả sản phẩm bằng nhiều ngôn ngữ.</p>
        
        <h3>Quản lý kho hàng và giá cả</h3>
        <p>Theo dõi số lượng tồn kho realtime, đặt cảnh báo khi hết hàng hoặc sắp hết hạn. Quản lý giá cả linh hoạt với khả năng đặt giá khuyến mãi, giá sỉ và giá theo số lượng. Hỗ trợ nhập xuất hàng hàng loạt với file Excel.</p>
        
        <h3>Quản lý chất lượng và giấy tờ</h3>
        <p>Lưu trữ và quản lý tất cả giấy tờ liên quan đến sản phẩm như giấy chứng nhận chất lượng, giấy phép nhập khẩu, giấy kiểm định an toàn thực phẩm. Đảm bảo tuân thủ đầy đủ quy định pháp lý về nhập khẩu thực phẩm.</p>
        
        <h2>Công cụ phân tích và báo cáo</h2>
        <p>Thống kê chi tiết về sản phẩm bán chạy, doanh thu theo sản phẩm, lợi nhuận và xu hướng tiêu thụ. Báo cáo tồn kho chi tiết giúp tối ưu hóa việc nhập hàng và giảm thiểu lãng phí. Công cụ dự đoán nhu cầu giúp lên kế hoạch kinh doanh hiệu quả.</p>
      </div>
      
      <div className="admin-product-link">
        <Link to="/admin/product/create" className="add-product">
          <AppstoreAddOutlined />
        </Link>
        <Link to="/admin/product/update/info" className="add-product">
          <ToolOutlined></ToolOutlined>
        </Link>
      </div>

      {products ? (
        <ListProduct listProducts={products}></ListProduct>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default AdminProduct;
