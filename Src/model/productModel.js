//Require
const mongoose = require('mongoose');

//Schema
const Product = new mongoose.Schema({
    
    price :{
        type: Number,
        required: true,
        collection: String
    },
    imgUrl :{
        type: String,
        required: true
        
    },
    title :{
        type: String,
        required: true,
    },
    count:{
        type: Number,
        required : true,
        default : 1
    },
    dis:{
        type:String,
        required:true
    }

},{timestamps : true})

//Export;
module.exports = mongoose.model('Product',Product,"Product_Data");
