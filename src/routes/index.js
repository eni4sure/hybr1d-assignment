const router = require("express").Router();

router.use("/auth", require("./auth.route"));

router.get("/", (req, res) => {
    return res.status(200).json({ message: "Hello world from hybr1d-assignment! :)" });
});

module.exports = router;
