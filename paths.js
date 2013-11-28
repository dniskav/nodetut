function get(requesthandlers){
	var path = {};

	//the routes
	path['/'] = requesthandlers.home,
	path['/home'] = requesthandlers.home,
	path['/subir'] = requesthandlers.subir;

	return path;
}

exports.get = get;