import { UserModel } from '../models/UserModel.js';
import { generateToken } from '../untils/until.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs'; // <--- 1. Import thêm cái này

export const getAllUser = (req, res) => {
    UserModel.find({})
        .then(user => res.send(user))
        .catch(err => console.log(err));
};

export const registerUser = expressAsyncHandler(async (req, res) => {
    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        // 2. MÃ HÓA MẬT KHẨU TRƯỚC KHI LƯU
        password: bcrypt.hashSync(req.body.password, 10), 
        address: '',
        phone: '',
        isAdmin: false,
    });
    
    // Thêm await để đảm bảo lưu xong mới chạy tiếp
    const createUser = await user.save(); 
    
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        address: user.address,
        phone: user.phone,
        token: generateToken(user),
    });
});

export const login = expressAsyncHandler(async (req, res) => {
    // 3. CHỈ TÌM THEO EMAIL (Bỏ password ở đây đi)
    const user = await UserModel.findOne({ email: req.body.email });
    
    // 4. KIỂM TRA MẬT KHẨU BẰNG BCRYPT
    // Nếu user tồn tại VÀ mật khẩu giải mã khớp nhau
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            address: user.address,
            phone: user.phone,
            isAdmin: user.isAdmin,
            token: generateToken(user),
        });
    } else {
        res.status(401).send({ message: "Invalid email or password" });
    }
});

export const DeleteUser = expressAsyncHandler(async (req, res) => {
    const user = await UserModel.findById({ _id: req.params.id });

    if (user) {
        await UserModel.deleteOne({ _id: req.params.id }); // Dùng deleteOne thay cho remove
        res.send({ message: 'User deleted' });
    } else {
        res.send({ message: 'User not exists' });
    }
});

export const updateProfile = expressAsyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.phone = req.body.phone || user.phone;
        user.address = req.body.address || user.address;
        
        // Nếu user đổi pass thì cũng phải mã hóa lại
        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password, 10);
        }

        const updatedUser = await user.save();

        res.send({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            phone: updatedUser.phone,
            address: updatedUser.address,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser),
        });
    } else {
        res.status(404).send({ message: 'User not found' });
    }
});