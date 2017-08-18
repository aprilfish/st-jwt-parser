var fs = require('fs');
var jwtDecode = require('jwt-decode');
var options = process.argv;
var fname=options[2];

fs.readFile(fname, {flag: 'r+', encoding: 'utf8'}, function (err, text) {
    if(err) {
     console.error(err);
     return;
    }
    
    var data = jwtDecode(text);
	console.log(data);
});
