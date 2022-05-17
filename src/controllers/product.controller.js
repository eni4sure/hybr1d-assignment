const response = require("./../utils/response");
const ProductServ = require("./../services/product.service");

class ProductContoller {
    async create(req, res) {
        const result = await ProductServ.create(req.body);
        res.status(201).send(response("product created", result));
    }

    async getAll(req, res) {
        const result = await ProductServ.getAll();
        res.status(200).send(response("All product", result));
    }

    async getOne(req, res) {
        const result = await ProductServ.getOne(req.params.productId);
        res.status(200).send(response("product data", result));
    }

    async update(req, res) {
        const result = await ProductServ.update(req.params.productId, req.body);
        res.status(200).send(response("product updated", result));
    }

    async delete(req, res) {
        const result = await ProductServ.delete(req.params.productId);
        res.status(200).send(response("product deleted", result));
    }
}

module.exports = new ProductContoller();
