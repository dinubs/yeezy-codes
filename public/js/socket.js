var socket = io();

var ranCode = document.querySelector('.ran-code');

socket.on('output', function(out) {
  ranCode.innerHTML += out + '<br />';
});

var button = document.querySelector('.run');
button.onclick = function() {
  var code = document.querySelector('.code').value;
  socket.emit('run', code);
}