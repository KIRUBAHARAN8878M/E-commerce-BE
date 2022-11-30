//Required And connections;
const mongoose = require('mongoose');
require('dotenv').config();
const Link = process.env.LINK

mongoose.connect(`${Link}`,{ useNewUrlParser: true,useUnifiedTopology: true}).then(() => {
    console.log("Shop data connected");
}).catch((error) => {
    console.log(error);
})