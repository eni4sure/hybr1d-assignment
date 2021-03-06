const router = require("express").Router();

router.use("/auth", require("./auth.route"));
router.use("/buyer", require("./buyer.route"));
router.use("/product", require("./product.route"));
router.use("/seller", require("./seller.route"));

router.get("/", (req, res) => {
    return res.status(200).json({ message: "Hello world from hybr1d-assignment! :)" });
});

module.exports = router;
