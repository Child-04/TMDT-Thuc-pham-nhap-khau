import dotenv from 'dotenv';
import connectDB from './config/db/db.js';
import { ProductModel } from './models/ProductModel.js';
import { UserModel } from './models/UserModel.js'; // Nhớ import UserModel
import { data } from './data.js';

dotenv.config();

const importData = async () => {
  try {
    await connectDB();

    // Xóa dữ liệu cũ
    await ProductModel.deleteMany();
    await UserModel.deleteMany(); // Xóa user cũ
    console.log('Đã xóa dữ liệu cũ!');

    // Thêm dữ liệu mới
    await ProductModel.insertMany(data.products);
    await UserModel.insertMany(data.users); // Thêm user từ data.js

    console.log('Đã import User và Product thành công!');
    process.exit();
  } catch (error) {
    console.error(`Lỗi: ${error.message}`);
    process.exit(1);
  }
};

importData();