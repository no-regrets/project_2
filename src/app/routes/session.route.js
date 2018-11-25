module.exports = function(app) {
 
    const sessions = require('../controller/session.controller.js');
 
    // Create a new Session
    app.post('/api/sessions', sessions.create);
 
    // Retrieve all Session
    app.get('/api/sessions', sessions.findAll);
 
    // Retrieve a single Session by Id
    app.get('/api/sessions/:sessionId', sessions.findById);
 
    // Update a Session with Id
    app.put('/api/sessions', sessions.update);
 
    // Delete a Session with Id
    app.delete('/api/sessions/:sessionId', sessions.delete);
}