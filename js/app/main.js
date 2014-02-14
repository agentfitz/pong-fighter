/* global require, angular */

require(['config'], function(config) {
	
	'use strict';

	require.config({
		baseUrl: config.appDir,
		paths: {
			jquery: config.libDir + '/jquery.min',
			app: config.libDir + '/ng-app',
			router: config.libDir + '/angular-ui-router.min',
			sanitize: config.libDir + '/angular-sanitize.min',
			animate: config.libDir + '/angular-animate.min',
			underscore: config.libDir + '/underscore-min'
		}
	});
	
	require(
		[

			// lib
			'app',
			'jquery',
			'router',
			'sanitize',
			'animate',
			'underscore',

			// app
			'directives/ping-pong-table',
			'directives/match-buttons',
			'directives/control-bar',
			'controllers/ChallengeCtrl',
			'services/PlayerService',
			'services/ParticipantService',
			'services/AudioService',
			'services/UtilService'
		],
		function (app) {

			angular.bootstrap(document, [app.name]);

		}
	);

});