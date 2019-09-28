
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
// Sets up the Express App
var app = express();

// Static directory
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

//reference routes.js file. Rec'd 'cannot get' error message in browser without this
var routes = require('./controllers/routes.js')
app.use('/',routes);

var port = 3000;
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
