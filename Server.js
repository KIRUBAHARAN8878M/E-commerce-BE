//Require:
require('./Src/Connection/connection');
const express = require('express');
const App = express();
const cors = require('cors');
const User = require('./Src/Routes/userRoute');
const Store = require('./Src/Routes/productRoute');
const productadd = require('./Src/Routes/adminRoute');


//Middleware;
App.use(express.json());
App.use(cors({origin:'https://just-watches.netlify.app'}))



//Route Controller;
App.use('/',User);
App.use('/User',User);
App.use("/Product",Store)
App.use('/admin',productadd)


//Port Listing;
const PORT =process.env.PORT ||4000;
App.listen(PORT, () => {
    console.log('Port is Running on ' + PORT);
});