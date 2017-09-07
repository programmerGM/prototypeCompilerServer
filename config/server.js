module.exports = function () {
    var express = require('express');
    var app = express();
    
    require('../app/routes/web')(app);

    app.listen(3000, function () {
        console.log('Online: localhost:3000');
    });
}



