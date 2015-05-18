var path = require('path'),
    express = require('express'),
    logfmt = require('logfmt');

var app = express();

app.use(logfmt.requestLogger());
// Configuration
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/public', express.static(__dirname + '/public'));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


