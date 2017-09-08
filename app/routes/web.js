module.exports = function (app) {    

    var lexico = {
        code: [],
        token: [],
        line: [],
        messageError: ''
    }

    app.get('/', function(req, res) {
        
        var text = req.params.text;

        // Processar a lógica aqui


        return res.send(lexico);
    });
}




