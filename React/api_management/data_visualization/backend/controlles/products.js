const Data = require('../models/data');

const getAllProducts = async (req, res) => {
    const { sort, select, end_year, intensity, sector, topic, insight, url, region, start_year, impact, added, published, country, relevance, pestle, source, title, likelihood } = req.query;
    const queryObject = {};
    if (end_year) {
        queryObject.end_year = { $regex: end_year, $options: "i" };
    }
    if (intensity) {
        queryObject.intensity = { $regex: intensity, $options: "i" };
    }
    if (sector) {
        queryObject.sector = { $regex: sector, $options: "i" };
    }
    if (topic) {
        queryObject.topic = topic;
    }
    if (insight) {
        queryObject.insight = { $regex: insight, $options: "i" };
    }
    if (url) {
        queryObject.url = { $regex: url, $options: "i" };
    }
    if (region) {
        queryObject.region = { $regex: region, $options: "i" };
    }
    if (start_year) {
        queryObject.start_year = start_year;
    }
    if (impact) {
        queryObject.impact = impact;
    }
    if (added) {
        queryObject.added = added;
    }
    if (published) {
        queryObject.published = published;
    }
    if (country) {
        queryObject.country = country;
    }
    if (relevance) {
        queryObject.relevance = relevance;
    }
    if (pestle) {
        queryObject.pestle = pestle;
    }
    if (source) {
        queryObject.source = source;
    }
    if (title) {
        queryObject.title = title;
    }
    if (likelihood) {
        queryObject.likelihood = likelihood;
    }
    let apiData = Data.find(queryObject);
    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }
    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    // let page = Number(req.query.page) || 1;
    // let limit = Number(req.query.limit) || 12;
    // let skip = (page - 1) * limit;
    // apiData = apiData.skip(skip).limit(limit);

    const jsondata = await apiData;
    res.status(200).json(jsondata);
};


module.exports = { getAllProducts };