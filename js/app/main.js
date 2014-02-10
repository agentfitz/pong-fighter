/* global require, angular */

require(['config'], function(config) {
	
	'use strict';

	require.config({
		baseUrl: config.appDir,
		paths: {
			app: config.libDir + '/ng-app',
			router: config.libDir + '/angular-ui-router.min',
			sanitize: config.libDir + '/angular-sanitize.min',
			modal: config.appDir + '/directives/modal-dialog'
		}
	});
	
	require(
		[
			'app',
			'router',
			'sanitize',
			'modal',
			'controllers/ChallengeCtrl',
			'services/PlayerService'
		],
		function (app) {

			console.log("bootstrap this mfer.");
			angular.bootstrap(document, [app.name]);

		}
	);

});