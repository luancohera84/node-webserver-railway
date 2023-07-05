const http = require('http');

http.createServer( ( req, resp ) => {

    // Respuesta json
    // resp.writeHead(200, { 'Content-Type': 'application/json' });
    resp.setHeader('Content-Disposition', 'attachement; filename=lista.csv');
    resp.writeHead(200, { 'Content-Type': 'application/csv' });

    resp.write( 'id, nombre\n' );
    resp.write( '1, Luan Cohera\n' );
    resp.write( '2, Nataly Rojas\n' );
    resp.write( '3, Adrian Poras\n' );
    resp.write( '4, La Toxy\n' );

    resp.end();

})
.listen( 8080 );

console.log('Server corriendo por el puerto: ', 8080);