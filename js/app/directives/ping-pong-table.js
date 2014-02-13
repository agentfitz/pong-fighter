
define(["app"], function(app){


	app.directive('pingPongTable', function() {
		
		return {
			restrict: 'E',
			scope: {},
			replace: true, // Replace with the template below
			// transclude: true, // we want to insert custom content inside the directive
			link: function(scope, element, attrs) {
				
				// nothing yet

			},

			templateUrl: 'js/app/directives/templates/ping-pong-table.html'

		};

	});


});