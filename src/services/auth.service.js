const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

const { JWT_SECRET } = require("./../config");
const User = require("./../models/user.model");
const CustomError = require("./../utils/custom-error");

class AuthService {
    async register(data) {
        if (!data.username) throw new CustomError("username is required");
        if (!data.password) throw new CustomError("password is required");
        if (!data.role) throw new CustomError("role is required");

        let user = await User.findOne({ username: data.username });
        if (user) throw new CustomError("username already exists");

        user = new User(data);
        const token = JWT.sign({ id: user._id, role: user.role }, JWT_SECRET);
        await user.save();

        return { token };
    }

    async login(data) {
        if (!data.username) throw new CustomError("username is required");
        if (!data.password) throw new CustomError("password is required");

        // Check if user exist
        const user = await User.findOne({ username: data.username });
        if (!user) throw new CustomError("incorrect username or password");

        // Check if user password is correct
        const isCorrect = await bcrypt.compare(data.password, user.password);
        if (!isCorrect) throw new CustomError("incorrect username or password");

        const token = await JWT.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: 60 * 60 });

        return { token };
    }
}

module.exports = new AuthService();
