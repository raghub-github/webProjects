const getAllProducts = async (req, res)=>{
res.status(200).json({product:"Mango"});
};
const getAllProductsTesting = async (req, res)=>{
res.status(200).json({product:"MangoTesting"});
};

module.exports = {getAllProducts, getAllProductsTesting};