var express = require('express');
var router = express.Router();

var isEvil = function ( input ) {

    input = decodeURIComponent( input );

    return /<script/.test( input );
};

var getCleanInput = function ( input ) {

    return decodeURIComponent( input.replace( '+', '%20' ) );
};

router.get( '/hello/:name', function ( req, res ) {

    var name;

    if ( req.params.name &&
            ! isEvil( req.params.name ) ) {

        name = getCleanInput( req.params.name );

        res.render( 'hello', {
            title: 'Hello '+ name,
            name: encodeURIComponent( name ) // encoding back in for a nice Vue transition
        });

    } else {
        res.redirect( '/' );
    }
});

module.exports = router;