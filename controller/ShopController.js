

exports.getHome = (req,res,next)=>{
    console.log('Open index page');
    res.render('index');
}

exports.getCompair = (req,res,next)=>{
    console.log('Open compair page');
    res.render('compair');
}

exports.getComponents = (req,res,next)=>{
    console.log('Open components page');
    res.render('components');
}

exports.getContact = (req,res,next)=>{
    console.log('Open contact page');
    res.render('contact');
}

exports.getFAQ = (req,res,next)=>{
    console.log('Open FAQ page');
    res.render('faq');
}

exports.getForgetpass = (req,res,next)=>{
    console.log('Open forgetpass page');
    res.render('forgetpass');
}

exports.getLegalNotice = (req,res,next)=>{
    console.log('Open legal_notice page');
    res.render('legal_notice');
}

exports.getLegalNotice = (req,res,next)=>{
    console.log('Open legal_notice page');
    res.render('legal_notice');
}

exports.getLogin = (req,res,next)=>{
    console.log('Open login page');
    res.render('login');
}

exports.getNormal = (req,res,next)=>{
    console.log('Open normal page');
    res.render('normal');
}

exports.getProductDetails = (req,res,next)=>{
    console.log('Open product_details page');
    res.render('product_details');
}

exports.getProductSummary = (req,res,next)=>{
    console.log('Open product_summary page');
    res.render('product_summary');
}

exports.getProducts = (req,res,next)=>{
    console.log('Open products page');
    res.render('products');
}

exports.getRegister = (req,res,next)=>{
    console.log('Open register page');
    res.render('register');
}

exports.getSpecialOffer = (req,res,next)=>{
    console.log('Open special_offer page');
    res.render('special_offer');
}

exports.getTac = (req,res,next)=>{
    console.log('Open tac page');
    res.render('tac');
}