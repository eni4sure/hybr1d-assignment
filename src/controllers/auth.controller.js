const response = require("../utils/response");
const AuthService = require("../services/auth.service");

class AuthContoller {
    async register(req, res) {
        const result = await AuthService.register(req.body);
        res.status(201).send(response("new user registered successfully", result));
    }

    async login(req, res) {
        const result = await AuthService.login(req.body);
        res.status(200).send(response("user login successful", result));
    }
}

module.exports = new AuthContoller();
