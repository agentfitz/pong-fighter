

define(["app"], function (app) {

	'use strict';


	app.factory("AudioService", function(){


		var api = {},

			state = {

				isSoundtrackPlaying: false

			},

			soundQueue = [],

			audioPath = "/media/audio/",

			audioExtension = ".mp3";


		api.hasBeenInit = function(){

			return localStorage.getItem("isSoundMuted") !== null;

		};


		api.playSound = function(file, isLooping){

			var sound, isLoop;

			if(!api.getIsSoundMuted()){

				sound = new Audio(audioPath + file + audioExtension),
				isLoop = typeof isLooping !== "undefined" ? isLooping : false;

				sound.loop = isLoop;
				sound.play();

				soundQueue.push(sound);

			}

		};

		api.startSoundtrack = function(){

			api.setIsSoundMuted(false);

			api.playSound("ambience1", true);

			state.isSoundtrackPlaying = true;	

		};

		api.muteSounds = function(){

			_.each(soundQueue, function(sound, i){

				sound.pause();

			});

			state.isSoundtrackPlaying = false;
			api.setIsSoundMuted(true);

		};

		api.setIsSoundMuted = function(val){

			localStorage.setItem("isSoundMuted", val);

		};

		api.getIsSoundMuted = function(){

			return localStorage.getItem("isSoundMuted") === "true";

		};

		api.init = function(){			

			if(api.hasBeenInit()){

				if(!api.getIsSoundMuted() && !state.isSoundtrackPlaying) {

					api.startSoundtrack();

				}

			}

			else {

				api.startSoundtrack();

			}

		};

		return api;


	});

});