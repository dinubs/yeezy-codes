var exec = require('child_process').exec;

module.exports = function(server) {
  var io = require('socket.io')(server.listener);

  io.on('connection', function (socket) {

    console.log('ok');    

    socket.on('run', function(code) {
      var command = exec('node -e "' + code + '"', function(err, stdout, stderr) {
        if (err !== null) {
          socket.emit('output', err);
        }
        output = stdout.split('\n');

        for (var i = 0; i < output.length; i++) {
          socket.emit('output', output[i]);
        }
      });
    }); 
  });
}