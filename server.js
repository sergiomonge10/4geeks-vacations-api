var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./api/models/userModel'), //created model loading here
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:root@ds259865.mlab.com:59865/4geeks-vacations', {
  useMongoClient: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/userRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
