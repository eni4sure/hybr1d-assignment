const JWT = require("jsonwebtoken");
const User = require("./../models/user.model");
const { role, JWT_SECRET } = require("./../config");
const CustomError = require("./../utils/custom-error");

/**
 * If no role is passed the default role is user
 *
 * @param  {any[]} roles List of roles allowed to access the route
 */
function auth(roles = []) {
    roles = roles.length > 0 ? roles : role.USER;

    return async (req, res, next) => {
        if (!req.headers.authorization) throw new CustomError("unauthorized access: Token not found", 401);

        const token = req.headers.authorization.split(" ")[1];
        const decoded = JWT.verify(token, JWT_SECRET);

        const user = await User.findOne({ _id: decoded.id });

        if (!user) throw new CustomError("unauthorized access: User does not exist", 401);

        if (!roles.includes(user.role)) throw new CustomError("unauthorized access", 401);

        req.$user = user;

        next();
    };
}

module.exports = auth;