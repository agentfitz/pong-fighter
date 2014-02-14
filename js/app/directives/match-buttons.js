
define(["app"], function(app){


	app.directive('matchButtons', function() {
		
		return {
			restrict: 'E',
			replace: true, // Replace with the template below
			// transclude: true, // we want to insert custom content inside the directive
			link: function(scope, element, attrs) {
				
				// nothing yet

			},

			templateUrl: 'js/app/directives/templates/match-buttons.html'

		};

	});


});