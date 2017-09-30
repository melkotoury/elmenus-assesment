let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
const port = 4200;
let cors = require('cors');

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://melkotoury:elmenu@ds151014.mlab.com:51014/elmenus')
    .then(() => { // if all is ok we will be here
      console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

// Required application specific custom router module
let itemRouter = require('./src/routes/itemRoutes');

// Use middlewares to set view engine and post json data to the server
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// Required application specific custom router module
let categoryRouter = require('./src/routes/categoryRoutes');

// Use middlewares to set view engine and post json data to the server
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/categories', categoryRouter);

// Start the server
app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});
