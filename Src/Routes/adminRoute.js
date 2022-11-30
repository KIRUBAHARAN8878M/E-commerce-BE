const Admin = require('../model/productModel');
const express = require('express');
const Path = express.Router();

//Get all data; Postman checked
Path.get('/All_Products', (req, res) => {
    try {
        Admin.find().then((data) => {
            res.status(201).json(data)
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//C.R.E.D;
//Create New data; Postman Checked
Path.post('/Add_Product', (req, res) => {
    try {
        //User Add;
        let New = new Admin(req.body);
        New.save().then((data) => {
            res.status(201).json(data);
            // { Message: 'New Movie Add'}
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//Read Data; Postman Check
Path.get('/Add_Product/:id', async (req, res) => {
    try {
        let Data = req.params.id;
        let movie = await Admin.findOne({ id: Data })
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Edit data; postman done
Path.put('/Add_Product/:id', async (req, res) => {
    try {
        let Data = req.params.id;
        let Update = req.body;

        await Admin.findByIdAndUpdate(Data, Update, { new: true }).then(() => {
            res.status(201).json({ Message: 'Update Done' })
        })

    } catch (error) {
        res.status(500).json(error)
    }
})

//Delete data; Postman Check
Path.delete('/Add_Product/:id', async (req, res) => {
    try {
        let data = req.params.id;
        await Admin.findOneAndDelete({ id: data })
        res.status(200).json({ Message: "Delete Done" })
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = Path