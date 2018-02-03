'use strict'

var jwt = require('jwt-simple');
var secret = 'labarcaestudio_creatucumple_pipe_manu_benji.manuela.osa.';



exports.createToken = function (user){
	var payload = {
        sub: user.sub,
		username: user.username,
		name : user.name,
		lastname : user.lastname,
        	mail: user.mail
	};

	return jwt.encode(payload, secret);
};
