function route(pathname, handle, response){

	if(typeof handle[pathname] === 'function'){
		handle[pathname](response);
	}else{
		response.writeHead(404, {'Content-Type' : 'text/html'});
		var content = 'error 404 no encontrado';
		response.write(content);
		response.end();
	};

}

exports.route = route;