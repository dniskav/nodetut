var server = require('./server'),
	route = require('./route'),
	paths = require('./paths'),
	requesthandlers = require('./requesthandlers'),
	handle = paths.get(requesthandlers);

//start the server
server.init(route.route, handle);