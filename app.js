/* importar as configurações do servidor */
var app = require('./config/server');

var port = 80

/* parametrizar a porta de escuta */
app.listen(port, function () {
	console.log('\x1b[32mServidor online na porta ' + port + '\x1b[0m')
})