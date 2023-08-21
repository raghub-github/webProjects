const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    const { company, name, featured, sort } = req.query;
    const queryObject = {};
    if (company) {
        queryObject.company = { $regex: company, $options: "i" };
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }
    if (featured) {
        queryObject.featured = featured;
    }
    let apiData = Product.find(queryObject);
    if (sort) {
        let sortFix = sort.replace(",", " ")
        apiData = apiData.sort(sortFix);
    }
    const MyData = await apiData;
    res.status(200).json({ MyData });
};
const getAllProductsTesting = async (req, res) => {
    res.status(200).json(req.query).sort("name -price");
};

module.exports = { getAllProducts, getAllProductsTesting };