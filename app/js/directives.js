/* global angular: false */

"use strict";

/* Directives */


angular.module("pongFighter.directives", []).
  directive("appVersion", ["version", function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
