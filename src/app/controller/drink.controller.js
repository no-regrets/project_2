const db = require('../config/db.config.js');
const Drink = db.drinks;

// Post a Drink
exports.create = (req, res) => {
    // Save to MySQL database
    let drink = req.body;
    Drink.create(drink).then(result => {
        // Send created drink to client
        res.json(result);
    });
};

// Fetch all Drinks
exports.findAll = (req, res) => {
    Drink.findAll().then(drinks => {
        // Send all drinks to Client
        res.json(drinks);
    });
};

// Find a Drink by Id
exports.findById = (req, res) => {
    Drink.findById(req.params.drinkId).then(drink => {
        res.json(drink);
    })
};

// Update a Drink
exports.update = (req, res) => {
    let drink = req.body;
    let id = req.body.id;
    Drink.update(drink,
        { where: { id: id } }
    ).then(() => {
        res.status(200).json({ msg: "updated successfully a drink with id = " + id });
    });
};

// Delete a Drink by Id
exports.delete = (req, res) => {
    const id = req.params.drinkId;
    Drink.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: 'deleted successfully a drink with id = ' + id });
    });
};