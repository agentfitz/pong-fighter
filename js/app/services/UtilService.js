

define(["app"], function (app) {

	'use strict';


	app.factory("UtilService", function(){


		var api = {};




		api.getRandomNumber = function(min, max){

			return Math.floor(Math.random() * (max - min + 1)) + min;

		};

		api.isNumber = function(n){
			
			return n == parseFloat(n);

		};

		api.isEven = function(n) {
		
		   return api.isNumber(n) && (n % 2 == 0);
		
		};

		api.isOdd = function(n) {
		
		   return api.isNumber(n) && (Math.abs(n) % 2 == 1);
		
		};


		return api;


	});


});