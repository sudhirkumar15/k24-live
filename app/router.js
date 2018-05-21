module.exports = (app) => {
	app.use('/authenticate', require('./http/auth'));
	
};
