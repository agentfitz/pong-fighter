

define(["app"], function (app) {

	'use strict';


	app.factory("UtilService", function(){


		var api = {},

			s4 = function() {

				return Math.floor((1 + Math.random()) * 0x10000)
						   .toString(16)
						   .substring(1);

			};




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

		api.getUniqueId = function() {
			
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();

		};

		api.getDeepCopy = function(obj){

			return JSON.parse(JSON.stringify(obj))

		};


		return api;


	});


});