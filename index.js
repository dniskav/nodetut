var server = require('./server'),
	route = require('./route'),
	paths = require('./paths'),
	path = require('path'),//helps with file paths
	fs = require('fs'),//helps with file system tasks
	requesthandlers = require('./requesthandlers'),
	handle = paths.get(requesthandlers);

//start the server
server.init(route.route, handle);