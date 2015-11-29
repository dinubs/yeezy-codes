var shelljs = require('shelljs');
var exec = require('child_process').exec;

var str = "var fs = require('fs');fs.readdir('./', function (err, data) {if (err) {return console.error(err);}console.log('ok');console.log('Asynchronous read: ' + data);});";

var command = exec('node -e "' + str + '"', function(err, stdout, stderr) {
  console.log(stdout.split('\n')[0]);
  if (err !== null) {
    console.log('exec error: ' + err);
  }
});