var c = require('./controllers/index');

module.exports = function(server) {

  // Static files
  server.route({
    method: 'GET',
    path: '/css/{file}.css',
    handler: function (request, reply) {
        reply.file("./public/css/"+request.params.file+".css");
    }
  });
  server.route({
      method: 'GET',
      path: '/js/{file}.js',
      handler: function (request, reply) {
          reply.file("./public/js/"+request.params.file+".js");
      }
  });
  server.route({
      method: 'GET',
      path: '/templates/{file}',
      handler: function (request, reply) {
          reply.file("./public/templates/"+request.params.file);
      }
  });


  // Node runner
  server.route({method: 'GET', path: '/node', handler: c.Base.socketIO});

  // Base routes
  server.route({method: 'GET', path: '/{path*}', handler: c.Base.index});
};