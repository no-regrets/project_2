module.exports = function(app) {
 
    const drinks = require('../controller/drink.controller');
 
    // Create a new Drink
    app.post('/api/drinks', drinks.create);
 
    // Retrieve all Drink
    app.get('/api/drinks', drinks.findAll);
 
    // Retrieve a single Drink by Id
    app.get('/api/drinks/:drinkId', drinks.findById);
 
    // Update a Drink with Id
    app.put('/api/drinks', drinks.update);
 
    // Delete a Drink with Id
    app.delete('/api/drinks/:drinkId', drinks.delete);
}