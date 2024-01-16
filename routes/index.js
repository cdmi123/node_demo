var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller');

router.get('/',user.get_data);
router.post('/',user.index);


module.exports = router;
