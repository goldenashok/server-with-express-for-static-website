const express = require('express');
const app = express();

app.use(express.static('public'));

var port = 8085;
if(process.argv.includes('--port', '--p')) {
	port = process.argv[process.argv.indexOf('--port')+1] || process.argv[process.argv.indexOf('--p')+1];
	console.log('port '+port);
}

app.listen(port, function(){
	console.log('app runnign in http://localhost:'+port);
});