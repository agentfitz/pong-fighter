

define(["app"], function (app) {

	'use strict';


	app.factory("UtilService", function(){


		var api = {};




		api.getRandomNumber = function(min, max){

			return Math.floor(Math.random() * (max - min + 1)) + min;

		}; 	


		return api;


	});


});