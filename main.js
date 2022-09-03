const express = require('express')
const app = express()
var session = require('express-session');

const port = 3000;

app.set("view engine","ejs")

//For creating session
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
  }));

//To parse all the reqesent parameters
app.use(express.json());

app.use(express.urlencoded({ extended:true }));

const initiateRoutes = require("./entities/routes");
var initiateMongoConnection = require("./database/init");



app.use(function(req, res, next)
{
	
	console.log("its a logger", req.url, req.method);
	next();
})


//For serving the static files
app.use( express.static("./static") );
app.use( express.static("./uploads") );



initiateMongoConnection()
.then(function()
{
	console.log("db connected");

	initiateRoutes(app);

	app.listen(3000, function()
	{
		console.log("hello express , its running");
		
	});
})
.catch(function(err)
{
	console.log("DB error");
})