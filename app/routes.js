module.exports = function(app) {
	// api ---------------------------------------------------------------------
	// get contact form data and do someething ...
	app.post('/api/contact', function(req, res) {
		// do somethins
		var congrats = "Congrats "+req.body.form_data.name+"! ";
		res.send({status:congrats + " Your form has been sent!"});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load index.html otherwise
	});
};