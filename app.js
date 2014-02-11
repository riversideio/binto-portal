var express = require('express'),
  hbs = require('hbs'),
  router = require("./routes/__loader"),
  routes,
  http = require('http'),
  path = require('path'),
  app = express();

app.locals.layout = "__layout";

/*
basic helpers for __layout
*/
hbs.registerHelper( "json", function( context ){
  return JSON.stringify( context );
});

app.configure(function(){
  app.set('port', process.env.PORT || 3030);
  app.engine('hbs', hbs.__express);
  app.set('views', __dirname + '/app/templates');
  app.set('view engine', 'hbs');
  app.use(express.favicon());
  //app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.cookieSession({key:"__io__", secret: process.env.SECRET_COOKIE || '!!~'}));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'app')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

router( function( routes ){
  app.get("/", routes.index.main);
  app.get("/:view", routes.index.main);
  /*
  this is to startup heroku app for visitor 
  of our site so when the user clicks signup
  the app is started up
  */
  app.get("/startup.json", 
    function ( req, res, next ) {
      res.header('Access-Control-Allow-Credentials', true);
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization');
      next();
    },
    function ( req, res ) {
      res.jsonp( 200, {
        started : true
      });
    }
  );
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
