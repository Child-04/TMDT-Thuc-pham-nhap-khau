import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../../../actions/UserAction';
import ListUser from './ListUser';
import './AdminUser.css'

function AdminUser(props) {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.user)

    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch])
    return (
        <div className="admin-user">
            {/* SEO Content Block */}
            <div style={{ display: 'none' }} className="seo-content-admin-user">
                <h1>Quản lý khách hàng thực phẩm nhập khẩu</h1>
                <p>Trang quản lý khách hàng toàn diện cho hệ thống thương mại điện tử thực phẩm nhập khẩu. Theo dõi thông tin khách hàng, lịch sử mua hàng và hành vi tiêu dùng để tối ưu hóa dịch vụ chăm sóc khách hàng.</p>
                
                <h2>Phân tích hành vi khách hàng</h2>
                <p>Hệ thống quản lý khách hàng giúp phân tích chi tiết hành vi mua sắm, sở thích và xu hướng tiêu dùng của từng nhóm khách hàng. Dữ liệu này giúp xây dựng chiến lược marketing hiệu quả và cá nhân hóa trải nghiệm mua sắm.</p>
                
                <h3>Phân khúc khách hàng chuyên sâu</h3>
                <p>Chia khách hàng thành các nhóm dựa trên giá trị đơn hàng, tần suất mua sắm, loại sản phẩm yêu thích và địa lý. Hỗ trợ tạo các chương trình khuyến mãi và chăm sóc khách hàng theo từng phân khúc cụ thể.</p>
                
                <h3>Quản lý chương trình thành viên</h3>
                <p>Theo dõi điểm tích lũy, quản lý các cấp độ thành viên và quyền lợi tương ứng. Hệ thống tự động cập nhật trạng thái thành viên dựa trên lịch sử mua hàng và giá trị giao dịch tích lũy.</p>
                
                <h2>Công cụ chăm sóc khách hàng hiện đại</h2>
                <p>Tích hợp các công cụ chăm sóc khách hàng tiên tiến bao gồm gửi email marketing tự động, thông báo khuyến mãi cá nhân hóa và hệ thống chăm sóc khách hàng đa kênh. Giúp xây dựng mối quan hệ lâu dài với khách hàng.</p>
            </div>
            
            <span>Customers</span>
            {
                users ? (<ListUser users={users}></ListUser>) : (<h2> Loading</h2>)
            }
        </div>
    );
}

export default AdminUser;