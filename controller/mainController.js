const Product = require('../models/product');
const User = require('../models/users');
const CartItem = require('../models/cart_item');

exports.index = (req, res, next) => {
    
    Product.findAll()
    .then((product) =>{
        res.render("pages/index",{
            products:product,
            pageTitle: 'All products',
            path:'/'
        })
    })
    .catch(err => console.log(err));
    
}
exports.faq = (req, res, next) => {
    res.render("pages/faq")
}
exports.contact = (req, res, next) => {
    res.render("pages/contact")
}
exports.delivery = (req, res, next) => {
    res.render("pages/delivery")
}
exports.forgetpass = (req, res, next) => {
    res.render("pages/forgetpass")
}
exports.legal_notice = (req, res, next) => {
    res.render("pages/legal_notice")
}
exports.login = (req, res, next) => {
    res.render("pages/login")
}
exports.product_details = (req, res, next) => {
    res.render("pages/product_details")
}
exports.product_summary = (req, res, next) => {
    console.log('reg get Cart', req.user);
    req.user.getCart()
    .then((cart) => {
        return cart.getProducts().then((product) =>{
            res.render("pages/product_summary",{
                path:'/product_summary',
                products:product,
            });
        })
    })
    .catch((err) => console.log(err));
    //res.render("pages/product_summary");
}

exports.AddPostCart = (req,res,next) => {
    const productId = req.body.productId;
    let newQuantity = 1;
    let currentCart;
    req.user
        .getCart()
        .then((cart) => {
            currentCart = cart;
            return cart.getProducts({ where: { id: productId } });
        })
        .then(([product]) => {
            if (product) {
                const oldQuantity = product.cartItem.quantity;
                newQuantity = oldQuantity + 1;
                return product;
            }
            return Product.findByPk(productId);
        })
        .then((product) => {
            return currentCart.addProduct(product, {
                through: { quantity: newQuantity },
            });
        })
        .then(() => {
            req.user
                .getCart()
                .then((cart) => {
                    res.redirect('/product_summary');
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
}

exports.products = (req, res, next) => {
    res.render("pages/products")
}
exports.register = (req, res, next) => {
    res.render("pages/register")
}
exports.special_offer = (req, res, next) => {
    res.render("pages/special_offer")
}
exports.tac = (req, res, next) => {
    res.render("pages/tac")
}

exports.getOrders = (req, res, next) => {
    req.user
      .getOrders({ include: ["products"] })
      .then((orders) => {
        res.render("pages/orders", {
          path: "/orders/",
          orders: orders,
        });
      })
      .catch((err) => console.log(err));
  };

  exports.postOrder = (req, res, next) =>{
     let currentCart;
     req.user.getCart().then(cart => {
        currentCart = cart; 
        return cart.getProducts();
     })
     .then(products =>{
         //console.log('products in cart =>');
        return req.user.createOrder().then(order =>{
            return order.addProduct(
                products.map(product => {
                    product.orderItem = {quantity:product.cartItem.quantity};
                    return product;
                })
            )
       })   
      })
      .then(result =>{
          return currentCart.setProducts(null);
      })
      .then(result=>{
        
        res.redirect('/orders');
      })
      .catch(err => console.log(err));
  };