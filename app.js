const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const PORT = 8000;
const app = express();
//Routes
const ShopLink = require('./routes/ShopLink');

//MW
app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'static')));

app.use(ShopLink);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

