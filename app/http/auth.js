'use strict'
const express = require('express'), router = express.Router(),
auth1 = require('../models/auth'), auth = new auth1();


router.post('/', (req, res) => {
	auth.getAuth(req.body.fname)
	.then(data => {
		console.log(data);
		res.send("hi");
	}) 
	.catch(err => {
		console.log(err);
	});
	;
});



module.exports = router;
