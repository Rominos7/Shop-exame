const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = 8000;
const app = express();

// include sequalize
const sequalize = require("./helper/database");

//
const User = require('./models/users');

// middleware
const mainRoutes = require("./routes/mainRoutes");
const adminRoutes = require('./routes/adminRoutes');
//Error Page
const errorController = require('./controller/errorController');
const { isMaster } = require("cluster");


app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));
app.use(['/admin/products_edit/','/admin/'], express.static(path.join(__dirname, 'static')));
//app.use('/admin/products_edit/', express.static(path.join(__dirname, 'static')));

//app.use("/admin", express.static(__dirname + "/static"));
/*
app.use((req,res,next)=>{
  User.findById(1).then(user =>{
    req.user = user;
    next();
  }).catch(err => console.log(err));
});
*/
app.use(mainRoutes);
app.use(adminRoutes);
app.use(errorController.get404)

sequalize
  .sync()
  .then(connectionResult =>{
    return User.findByPk(1);
  })
  .then((user) => {
    if(!user){
      return User.create({
        name:'master',
        email:'master@example.com',
        password:'password',

      })
    }
    return user;

  })
  .then((user)=>{
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));