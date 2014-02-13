

define(["app"], function (app) {

	'use strict';


	app.factory("AudioService", function(){


		var api = {},

			soundQueue = [],

			audioPath = "/media/audio/",

			audioExtension = ".mp3";


		api.isSoundtrackPlaying = false;


		api.playSound = function(file, isLooping){

			var sound = new Audio(audioPath + file + audioExtension),
				isLoop = typeof isLooping !== "undefined" ? isLooping : false;

			sound.loop = isLoop;
			sound.play();

			soundQueue.push(sound);

		};

		api.startSoundtrack = function(){

			
			if(!api.isSoundtrackPlaying){

				api.playSound("ambience1", true);
				api.isSoundtrackPlaying = true;

			}


		};

		api.muteSounds = function(){

			_.each(soundQueue, function(i, el){

				i.pause();

			});

			api.isSoundtrackPlaying = false;

		};


		return api;


	});


});