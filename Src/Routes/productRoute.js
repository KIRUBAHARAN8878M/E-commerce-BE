const Product = require('../model/productModel');
const express = require('express');
const Path = express.Router()

//Get all data; Postman checked
Path.get('/User_Products', (req, res) => {
    try {
        Product.find().then((data) => {
            res.status(201).json(data)
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//View Data; Postman Check
Path.get('/User_Product/:id', async (req, res) => {
    try {
        let Data = req.params.id;
        let data = await Product.findOne({ id: Data })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})




module.exports = Path