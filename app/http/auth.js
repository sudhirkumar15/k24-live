'use strict'
const express = require('express'), router = express.Router();

router.post('/', (req, res) => {
	console.log(req.body);
	req.app.get('core').auth.getAuth(req.body.fname)
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
