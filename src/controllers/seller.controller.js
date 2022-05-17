const response = require("./../utils/response");
const SellerServ = require("./../services/seller.service");

class SellerContoller {
    async createCatalog(req, res) {
        const result = await SellerServ.createCatalog(req.body);
        res.status(201).send(response("seller catalog created", result));
    }

    async getSellerOrders(req, res) {
        const result = await SellerServ.getSellerOrders();
        res.status(200).send(response("all seller orders", result));
    }
}

module.exports = new SellerContoller();
