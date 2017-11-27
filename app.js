/* importar as configurações do servidor */
var app = require('./config/server');

var port = 80

/* parametrizar a porta de escuta */
<<<<<<< HEAD
app.listen(port, function () {
	console.log('\x1b[32mServidor online na porta ' + port + '\x1b[0m')
=======
app.listen(80, function() {
    console.log('Servidor online');
>>>>>>> d22c9d75be9dc2082fe9324ba74bfd3c70609cdb
})