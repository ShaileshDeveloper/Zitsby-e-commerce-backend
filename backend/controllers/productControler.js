const mongoose = require('mongoose');
const {productModel} = require('../models/productModel')


const getProducts = async (req, res) => {
    const products = await productModel.find({})
    res.json(products)
}
const getProductById = async (req, res) => {
    const product = await  productModel.findById({_id: req.params.id })
    console.log(product)
    res.json(product)
}

module.exports = {getProducts , getProductById}