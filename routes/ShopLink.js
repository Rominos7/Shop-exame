const express = require('express');
const ShopController = require('../controller/ShopController');
const router = express.Router();

router.get('/index',ShopController.getHome);
router.get('/compair',ShopController.getCompair);
router.get('/components',ShopController.getComponents);
router.get('/contact',ShopController.getContact);
router.get('/faq',ShopController.getFAQ);
router.get('/forgetpass',ShopController.getForgetpass);
router.get('/legal_notice',ShopController.getLegalNotice);
router.get('/login',ShopController.getLogin);
router.get('/normal',ShopController.getNormal);
router.get('/product_details',ShopController.getProductDetails);
router.get('/product_summary',ShopController.getProductSummary);
router.get('/products',ShopController.getProducts);
router.get('/register',ShopController.getRegister);
router.get('/special_offer',ShopController.getSpecialOffer);
router.get('/tac',ShopController.getTac);

module.exports = router;