const Product = require("./../models/product.model");
const CustomError = require("./../utils/custom-error");

class ProductService {
    async create(data) {
        if (!data.name) throw new CustomError("name is required", 400);
        if (!data.price) throw new CustomError("price is required", 400);

        const product = {
            name: data.name,
            price: data.price
        };

        return await new Product(product).save();
    }

    async getAll() {
        return await Product.find({});
    }

    async getOne(productId) {
        const product = await Product.findOne({ _id: productId });
        if (!product) throw new CustomError("product does not exists");

        return product;
    }

    async update(productId, data) {
        const product = await Product.findByIdAndUpdate({ _id: productId }, { $set: data }, { new: true });
        if (!product) throw new CustomError("product dosen't exist", 404);
        return product;
    }

    async delete(productId) {
        const product = await Product.findOne({ _id: productId });
        product.remove();
        return product;
    }
}

module.exports = new ProductService();
