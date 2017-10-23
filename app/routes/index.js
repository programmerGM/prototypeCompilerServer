module.exports = function (application) {
	application.get('/', function (req, res) {
		application.app.controllers.index.index(application, req, res);
	});

	application.post('/validar', function (req, res) {
		application.app.controllers.index.validar(application, req, res);
	});
	application.post('/sintatico', function(req, res){
		application.app.controllers.sintatico.sintatico(application, req, res);
	});
}
