/* global require, angular */

require(['config'], function(config) {
	
	'use strict';

	require.config({
		baseUrl: config.appDir,
		paths: {
			app: config.libDir + '/ng-app',
			router: config.libDir + '/angular-ui-router.min',
			sanitize: config.libDir + '/angular-sanitize.min',
			pingPongTable: config.appDir + '/directives/ping-pong-table',
			controlBar: config.appDir + '/directives/control-bar',
			underscore: config.libDir + '/underscore-min'
		}
	});
	
	require(
		[
			'app',
			'router',
			'sanitize',
			'pingPongTable',
			'controlBar',
			'controllers/ChallengeCtrl',
			'services/PlayerService',
			'services/ParticipantService',
			'services/AudioService',
			'services/UtilService',
			'underscore'
		],
		function (app) {

			console.log("bootstrap this mfer.");
			angular.bootstrap(document, [app.name]);

		}
	);

});