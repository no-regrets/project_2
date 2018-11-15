// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================

///--------------------------------------------------------------------------------
// Drinks
module.exports = function(app) {
  // GET route for getting all of the drinks
  app.get("/api/drinks", function(req, res) {
    db.Drink.findAll({}).then(function(dbDrink) {
      // We have access to the drinks as an argument inside of the callback function
      res.json(dbDrink);
    });
  });

  // Get route for returning drinks of a specific category
  app.get("/api/drinks/:type", function(req, res) {
    // Add sequelize code to find all drinks where the category is equal to req.params.category,
    // return the result to the user with res.json
    let dbDrink = req.params.type;
    db.Drink.findAll({
      where: {
        name: dbDrink
      }
    }).then(function(dbDrink) {
      res.json(dbDrink);
    });
  });

  // Get route for retrieving a single drink
  app.get("/api/drinks/:id", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
  });

  // POST route for saving a new post
  app.post("/api/drinks", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    // create takes an argument of an object describing the item we want to
    db.Drink.create({
      name: req.body.name,
      alcoholContent: req.body.alcoholContent
    })
      .then(function(dbPost) {
        // We have access to the new drink as an argument inside of the callback function
        res.json(dbPost);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting drinks
  app.delete("/api/drinks/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id,
    // then return the result to the user using res.json

    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating drinks
  app.put("/api/drinks", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Drink.update(
      {
        name: req.body.name,
        alcoholContent: req.body.alcoholContent
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  ///--------------------------------------------------------------------------------
  // Sessions
  // GET route for getting all of the sessions
  app.get("/api/sessions", function(req, res) {
    db.Session.findAll({}).then(function(debSess) {
      // We have access to the drinks as an argument inside of the callback function
      res.json(dbSess);
    });
  });

  // Get route for retrieving a single session
  app.get("/api/sessions/:id", function(req, res) {
    // Add sequelize code to find a single session where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.Session.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new session
  app.post("/api/sessions", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    // create takes an argument of an object describing the item we want to
    db.Session.create({
      drinkGoal: req.body.drinkGoal,
      createdAt: req.body.createdAt,
      endedAt: req.body.endedAt
    })
      .then(function(dbPost) {
        // We have access to the new drink as an argument inside of the callback function
        res.json(dbPost);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting drinks
  app.delete("/api/sessions/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id,
    // then return the result to the user using res.json

    db.Session.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating drinks
  app.put("/api/sessions", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Session.update(
      {
        drinkGoal: req.body.drinkGoal,
        createdAt: req.body.createdAt,
        endedAt: req.body.endedAt
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  ///--------------------------------------------------------------------------------
  // Users
  // GET route for getting all of the users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(debSess) {
      // We have access to the drinks as an argument inside of the callback function
      res.json(dbSess);
    });
  });

  // Get route for retrieving a single user
  app.get("/api/users/:id", function(req, res) {
    // Add sequelize code to find a single session where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new session
  app.post("/api/users", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    // create takes an argument of an object describing the item we want to
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      sex: req.body.sex,
      weight: req.body.weight
    })
      .then(function(dbPost) {
        // We have access to the new drink as an argument inside of the callback function
        res.json(dbPost);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting users
  app.delete("/api/users/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id,
    // then return the result to the user using res.json

    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating users
  app.put("/api/users/:id", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.User.update(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        sex: req.body.sex,
        weight: req.body.weight
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};
