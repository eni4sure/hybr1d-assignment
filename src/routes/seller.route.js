const { role } = require("./../config");
const router = require("express").Router();
const auth = require("./../middlewares/auth.middleware");
const SellerCtrl = require("./../controllers/seller.controller");

router.post("/create-catalog", auth(role.USER), SellerCtrl.createCatalog);

router.get("/orders", auth(role.USER), SellerCtrl.getSellerOrders);

module.exports = router;
