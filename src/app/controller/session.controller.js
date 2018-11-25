const db = require('../config/db.config.js');
const Session = db.sessions;

// Post a Session
exports.create = (req, res) => {	
	// Save to MySQL database
	let session = req.body;
	Session.create(session).then(result => {		
		// Send created session to client
		res.json(result);
	});
};
 
// Fetch all Sessions
exports.findAll = (req, res) => {
	Session.findAll().then(sessions => {
	  // Send all sessions to Client
	  res.json(sessions);
	});
};

// Find a Session by Id
exports.findById = (req, res) => {	
	Session.findById(req.params.sessionId).then(session => {
		res.json(session);
	});
};
 
// Update a Session
exports.update = (req, res) => {
	let session = req.body;
	let id = req.body.id;
	Session.update(session, 
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a session with id = " + id});
				   });	
};
 
// Delete a Session by Id
exports.delete = (req, res) => {
	const id = req.params.sessionId;
	Session.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a session with id = ' + id});
	});
};