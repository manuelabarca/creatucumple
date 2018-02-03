'use strict'

var mongoose = require('mongoose');
var port = 3400;

var app = require('./app')
// Levanta el Servidor Node
mongoose.Promise  = global.Promise;
mongoose.connect('mongodb://localhost:27017/pushapp')
	.then(() => {
		console.log("Conexión con MongoDB establecida");
		app.listen(port, () => {
			console.log("Servidor Node está corriendo en el puerto: " + port)
		})
	})
	.catch(err => console.log(err));
