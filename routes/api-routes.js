// Dependencies
// =============================================================

// Requiring our models
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

	// GET route for getting all of the burgers
	app.get('/api/users', function(req, res) {
		db.User.findAll({}).then(function(dbUser) {
			res.json('index', dbUser);
		});
	});
};
