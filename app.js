var express = require('express');
var app = express();
var PORT = proccess.env.PORT || 3000
//start server
app.use(express.static(__dirname));
app.set('port', PORT);
//devilver the 
app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});