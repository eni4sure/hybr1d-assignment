const { role } = require("./../config");
const router = require("express").Router();
const ProductCtrl = require("./../controllers/product.controller");
const auth = require("./../middlewares/auth.middleware");

router.post("/", auth(role.USER), ProductCtrl.create);

router.get("/", auth(role.USER), ProductCtrl.getAll);

router.get("/:productId", auth(role.USER), ProductCtrl.getOne);

router.put("/:productId", auth(role.USER), ProductCtrl.update);

router.delete("/:productId", auth(role.USER), ProductCtrl.delete);

module.exports = router;
