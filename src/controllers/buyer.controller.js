const response = require("./../utils/response");
const BuyerServ = require("./../services/buyer.service");

class BuyerContoller {
    async getAllSellers(req, res) {
        const result = await BuyerServ.getAllSellers();
        res.status(201).send(response("all sellers", result));
    }

    async getSellerCatalog(req, res) {
        const result = await BuyerServ.getSellerCatalog(req.params.sellerId);
        res.status(200).send(response("seller's catalog query", result));
    }

    async createOrder(req, res) {
        const result = await BuyerServ.createOrder(req.body, req.$user._id, req.params.sellerId);
        res.status(201).send(response("order created", result));
    }
}

module.exports = new BuyerContoller();
