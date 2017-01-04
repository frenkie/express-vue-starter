var debug = require('debug')('yourapp');
var express = require('express'); // Docs http://expressjs.com/
var exphbs  = require('express-handlebars'); // Docs https://github.com/ericf/express-handlebars
var app = express();
var server = require('http').Server( app );

// binding to 0.0.0.0 allows connections from any other computer in the network
// to your ip address
var ipAddress = process.env.IP || '0.0.0.0';
var port = process.env.PORT || 8080;

server.listen( port, ipAddress, function () {

    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        extname: '.hbs'
    }));

    app.set('view engine', '.hbs');

    app.use( require('./routes/index') );
    app.use( require('./routes/hello-you') );
    app.use( require('./routes/static') );

    debug( 'started on localhost:' + port );
} );
