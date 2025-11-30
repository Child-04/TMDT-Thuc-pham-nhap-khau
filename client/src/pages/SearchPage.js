import React from 'react';
import Search from '../components/Search/Search';
import Header from '../components/header/Header';
import { Helmet } from 'react-helmet-async';

function SearchPage(props) {
    return (
        <div>
            <Helmet>
                <title>Tìm kiếm sản phẩm - Thực phẩm nhập khẩu cao cấp</title>
                <meta name="description" content="Tìm kiếm hàng nghìn sản phẩm thực phẩm nhập khẩu chất lượng cao từ khắp thế giới. Dễ dàng lọc theo loại, xuất xứ, thương hiệu và mức giá." />
            </Helmet>
            
            <Header></Header>
            
            {/* SEO Content Block */}
            <div style={{ padding: '20px 0', maxWidth: '1200px', margin: '0 auto', display: 'none' }} className="seo-content-search">
                <h1>Tìm kiếm thực phẩm nhập khẩu chất lượng cao</h1>
                <p>Khám phá kho tàng thực phẩm nhập khẩu phong phú với hàng nghìn sản phẩm được tuyển chọn từ các quốc gia nổi tiếng về ẩm thực như Nhật Bản, Hàn Quốc, Australia, New Zealand, Mỹ, châu Âu và nhiều vùng miền khác trên thế giới.</p>
                
                <h2>Tìm kiếm thông minh và chính xác</h2>
                <p>Hệ thống tìm kiếm hiện đại của chúng tôi giúp quý khách dễ dàng tìm thấy sản phẩm mong muốn chỉ trong vài giây. Bạn có thể tìm kiếm theo tên sản phẩm, thương hiệu, xuất xứ hoặc thậm chí theo thành phần dinh dưỡng và công dụng cụ thể.</p>
                
                <h3>Bộ lọc đa tiêu chí</h3>
                <p>Hệ thống lọc sản phẩm đa dạng giúp thu hẹp kết quả tìm kiếm theo đúng nhu cầu. Quý khách có thể lọc theo mức giá, thương hiệu, xuất xứ, loại thực phẩm, tình trạng có sẵn và nhiều tiêu chí khác để tìm ra sản phẩm phù hợp nhất.</p>
                
                <h3>Sắp xếp kết quả linh hoạt</h3>
                <p>Kết quả tìm kiếm có thể được sắp xếp theo nhiều cách khác nhau như độ phổ biến, giá tăng dần, giá giảm dần, sản phẩm mới nhất hoặc đánh giá cao nhất. Điều này giúp quý khách dễ dàng so sánh và lựa chọn sản phẩm tốt nhất.</p>
                
                <h2>Danh mục sản phẩm phong phú</h2>
                <p>Kho hàng của chúng tôi bao gồm đầy đủ các loại thực phẩm từ thực phẩm tươi sống, thực phẩm đông lạnh, thực phẩm khô, gia vị, đồ uống đến các sản phẩm dinh dưỡng cao cấp và thực phẩm chức năng.</p>
                
                <h3>Thực phẩm tươi sống cao cấp</h3>
                <p>Trái cây nhập khẩu từ các vùng trồng nổi tiếng, thịt bò Wagyu Nhật Bản, hải sản tươi từ Na Uy, Australia và nhiều sản phẩm tươi ngon khác được vận chuyển bằng công nghệ cold chain hiện đại.</p>
                
                <h3>Thực phẩm đông lạnh chất lượng</h3>
                <p>Các sản phẩm đông lạnh từ dim sum Hong Kong, pizza Ý, bánh ngọt Pháp đến các loại rau củ đông lạnh giữ nguyên giá trị dinh dưỡng và hương vị tự nhiên.</p>
                
                <h3>Gia vị và condiment đặc sản</h3>
                <p>Bộ sưu tập gia vị từ khắp nội thế giới giúp bạn tạo ra những món ăn đậm đà bản sắc. Từ wasabi Nhật, kimchi Hàn Quốc, phô mai Pháp đến các loại sauce và condiment độc đáo.</p>
            </div>
            
            <Search></Search>
        </div>
    );
}

export default SearchPage;