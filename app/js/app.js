/* global angular: false */

"use strict";


// Declare app level module which depends on filters, and services
angular.module("pongFighter", ["pongFighter.filters", "pongFighter.services", "pongFighter.directives", "pongFighter.controllers"]).
  config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/view1", {templateUrl: "partials/partial1.html", controller: "MyCtrl1"});
    $routeProvider.when("/view2", {templateUrl: "partials/partial2.html", controller: "MyCtrl2"});
    $routeProvider.when("/players", {templateUrl: "partials/player-list.html", controller: "PlayerListCtrl"});
    $routeProvider.when("/players/:playerId", {templateUrl: "partials/player-detail.html", controller: "PlayerDetailCtrl"});
    $routeProvider.otherwise({redirectTo: "/view1"});
  }]);
