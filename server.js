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
app.use(express.static('dist/angular6-httpclient'));

const db = require('./src/app/model');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});

require('./src/app/routes/customer.route')(app);
require('./src/app/routes/user.route')(app);
require('./src/app/routes/drink.route')(app);
require('./src/app/routes/session.route')(app);

 
// Create a Server
let PORT = process.env.PORT || 8080;
var server = app.listen(PORT, function () {
 
  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});

function initial(){

  let customers = [
    {
      id: 1,
      firstname: "Joe",
      lastname: "Thomas",
      age: 36
    },
    // {
    //   id: 2,
    //   firstname: "Peter",
    //   lastname: "Smith",
    //   age: 18
    // },
    // {
    //   id: 3,
    //   firstname: "Lauren",
    //   lastname: "Taylor",
    //   age: 31
    // },
    // {
    //   id: 4,
    //   firstname: "Mary",
    //   lastname: "Taylor",
    //   age: 24
    // },
    // {
    //   id: 5,
    //   firstname: "David",
    //   lastname: "Moore",
    //   age: 25
    // },
    // {
    //   id: 6,
    //   firstname: "Holly",
    //   lastname: "Davies",
    //   age: 27
    // },
    // {
    //   id: 7,
    //   firstname: "Michael",
    //   lastname: "Brown",
    //   age: 45
    // }
  ];

  // Init data -> save to MySQL
  const Customer = db.customers;
  for (let i = 0; i < customers.length; i++) { 
    Customer.create(customers[i]);  
  }
}