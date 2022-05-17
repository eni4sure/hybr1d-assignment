const { role } = require("./../config");
const router = require("express").Router();
const auth = require("./../middlewares/auth.middleware");
const BuyerCtrl = require("./../controllers/buyer.controller");

router.get("/list-of-sellers", auth(role.USER), BuyerCtrl.getAllSellers);

router.get("/seller-catalog/:sellerId", auth(role.USER), BuyerCtrl.getSellerCatalog);

router.post("/create-order/:sellerId", auth(role.USER), BuyerCtrl.createOrder);

module.exports = router;
