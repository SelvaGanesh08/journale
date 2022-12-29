const exp = require('express');
const router=exp.Router();
const ad=require('../controllers/admin');

router.get('/write',ad.getwrite);
router.post('/write',ad.postwrite);
module.exports=router;