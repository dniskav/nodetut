function home(response){
	var content =  "<h1>I'm a call to home page</h1>";
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.write(content);
	response.end();
}
function subir(response){
	var content =  "<h1>I'm a call to upload page</h1>";
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.write(content);
	response.end();
}
exports.home = home,
exports.subir = subir;