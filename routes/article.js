const exp = require('express');
const router=exp.Router();
const ad=require('../controllers/article');
router.get('/article/:category',ad.cater);
router.get('/art/:productId',ad.getarticle);
router.get('/art/category/:productId',ad.getarticle);
router.get('/article/art/:productId',ad.getarticle);
module.exports=router;