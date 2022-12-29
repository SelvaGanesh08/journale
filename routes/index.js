const exp = require('express');
const router=exp.Router();
const ad=require('../controllers/article');
router.get('/',ad.getIndex);

module.exports=router;