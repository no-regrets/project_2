var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.static('dist/angular-no-regrets'));

const db = require('./src/app/model');
  


require('./src/app/routes/user.route')(app);
require('./src/app/routes/drink.route')(app);
require('./src/app/routes/session.route')(app);

 
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');

});

// Create a Server
let PORT = process.env.PORT || 8080;
var server = app.listen(PORT, "0.0.0.0", function () {
 
  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});




