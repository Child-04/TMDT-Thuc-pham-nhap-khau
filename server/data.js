import bcrypt from 'bcryptjs';

export const data = {
    users: [
        {
            name: 'Admin User',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456', 10), // Mật khẩu là 123456
            isAdmin: true,
            phone: '0909000001',
            address: 'TP.HCM'
        },
        {
            name: 'Customer User',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456', 10),
            isAdmin: false,
            phone: '0909000002',
            address: 'Hà Nội'
        }
    ],

    "products": [
        {
            "id": 1,
            "name": "Táo nhập khẩu Fuji Nhật Bản (kg)",
            "slug": "tao-nhap-khau-fuji-nhat-ban",
            "price": 150000,
            "salePrice": 130000,
            "type": "Rau sạch",
            "image": "https://product.hstatic.net/200000887355/product/tao-fuji-nhat-ban__1__507afaaf7bbd41348bfd1efbc29dbf2d_master.jpg",
            "rating": 5,
            "numReviews": 10,
            "amount": 100,
            "reviews": [
                {
                    "name": "Khách hàng A",
                    "star": 5,
                    "comment": "Táo tươi ngon, giao hàng nhanh."
                }
            ]
        },
        {
            "id": 2,
            "name": "Nho nhập khẩu Mỹ (kg)",
            "slug": "nho-nhap-khau-my",
            "price": 220000,
            "salePrice": 200000,
            "type": "rau củ",
            "image": "https://minhcaumart.vn//media/com_eshop/products/resized/9900000480509-500x500.webp",
            "rating": 4.5,
            "numReviews": 20,
            "amount": 100,
            "reviews": [
                {
                    "name": "Khách hàng B",
                    "star": 5,
                    "comment": "Nho ngọt, đóng gói cẩn thận."
                }
            ]
        },
        {
            "id": 3,
            "name": "Thịt bò Úc (kg)",
            "slug": "thit-bo-uc",
            "price": 500000,
            "salePrice": 470000,
            "type": "thịt sạch",
            "image": "https://file.hstatic.net/200000356095/file/3_0f5af5d26f7647509c7f71dc30a4238b.jpg",
            "rating": 5,
            "numReviews": 15,
            "amount": 100,
            "reviews": [
                {
                    "name": "Khách hàng C",
                    "star": 4,
                    "comment": "Thịt tươi nhưng thời gian giao hơi lâu."
                }
            ]
        },
        {
            "id": 4,
            "name": "Sữa hạnh nhân nhập khẩu Mỹ (1 lít)",
            "slug": "sua-hanh-nhan-nhap-khau-my",
            "price": 75000,
            "salePrice": 70000,
            "type": "khác",
            "image": "https://product.hstatic.net/200000316271/product/hnnhmyt200_3f118015115e4f6b9cecc7c30e851c22_master.jpg",
            "rating": 4,
            "numReviews": 12,
            "amount": 100,
            "reviews": [
                {
                    "name": "Khách hàng D",
                    "star": 4,
                    "comment": "Vị ngon nhưng giá hơi cao."
                }
            ]
        },
        {
            "id": 5,
            "name": "Cá hồi Na Uy (kg)",
            "slug": "ca-hoi-na-uy",
            "price": 600000,
            "salePrice": 550000,
            "type": "khác",
            "image": "https://cdn.5sfood.vn/media/san-pham-5s/ca-hoi-nauy-fillet/ca-hoi-nauy-phi-le-3-min.jpg",
            "rating": 5,
            "numReviews": 8,
            "amount": 100,
            "reviews": [
                {
                    "name": "Khách hàng E",
                    "star": 5,
                    "comment": "Cá tươi, chất lượng tuyệt vời."
                }
            ]
        },
        {
            "id": 6,
            "name": "Bơ nhập khẩu Mexico (kg)",
            "slug": "bo-nhap-khau-mexico",
            "price": 180000,
            "salePrice": 170000,
            "type": "khác",
            "image": "https://product.hstatic.net/200000325223/product/z2448801510183_2263357c23ba80c433204bcdc0cb2d19_056f2c250f0d4ab699b11e67dc809b48_master.jpg",
            "rating": 4.8,
            "numReviews": 5,
            "amount": 100,
            "reviews": [
                {
                    "name": "Khách hàng F",
                    "star": 5,
                    "comment": "Bơ ngon, mềm và thơm."
                }
            ]
        },
        {
            "id": 7,
            "name": "Mì Ý Barilla (500g)",
            "slug": "mi-y-barilla",
            "price": 50000,
            "salePrice": 45000,
            "type": "khác",
            "image": "https://product.hstatic.net/1000282430/product/barilla-spaghettini-no.3-pasta_-500g_439d30a7573540e281a2b0afcc08a1a1_d583f94f68e942028896ed1ba6c7b1a1_master.jpg",
            "rating": 4.7,
            "numReviews": 30,
            "amount": 100,
            "reviews": [
                {
                    "name": "Khách hàng G",
                    "star": 5,
                    "comment": "Mì chất lượng cao, nấu nhanh."
                }
            ]
        },
        {
            "id": 8,
            "name": "Dầu ô liu Extra Virgin (500ml)",
            "slug": "dau-o-liu-extra-virgin",
            "price": 200000,
            "salePrice": 180000,
            "type": "khác",
            "image": "https://havamall.com/wp-content/uploads/2019/01/f50ef97b212bfd75a43a.png",
            "rating": 4.9,
            "numReviews": 22,
            "amount": 100,
            "reviews": [
                {
                    "name": "Khách hàng H",
                    "star": 5,
                    "comment": "Dầu chất lượng cao, rất tốt cho sức khỏe."
                }
            ]
        },
        {
            "id": 9,
            "name": "Trà xanh Nhật Bản (100g)",
            "slug": "tra-xanh-nhat-ban",
            "price": 150000,
            "salePrice": 140000,
            "type": "khác",
            "image": "https://hachihachi.com.vn/Uploads/_6/productimage/4980523093535.jpg",
            "rating": 4.5,
            "numReviews": 18,
            "amount": 100,
            "reviews": [
                {
                    "name": "Khách hàng I",
                    "star": 4,
                    "comment": "Hương vị trà thơm ngon, giá hợp lý."
                }
            ]
        },
        {
            "id": 10,
            "name": "Phô mai Cheddar Anh (500g)",
            "slug": "pho-mai-cheddar-anh",
            "price": 250000,
            "salePrice": 230000,
            "type": "khác",
            "image": "https://salt.tikicdn.com/cache/525x525/ts/product/7b/42/15/2f83f4517ea96dea7013cd676a6d29c9.jpg",
            "rating": 4.8,
            "numReviews": 10,
            "amount": 100,
            "reviews": [
                {
                    "name": "Khách hàng J",
                    "star": 5,
                    "comment": "Phô mai thơm ngon, dễ sử dụng."
                }
            ]
        }
    ]
}
