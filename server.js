var http = require('http'),
	url = require('url');

function init(route, handle){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		
		route(pathname, handle, response);
		console.log('a request from... ' + pathname);
	};

	http.createServer(onRequest).listen(1234);
	console.log('server up...');
}

exports.init = init;