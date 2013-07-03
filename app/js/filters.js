/* global angular: false */

"use strict";

/* Filters */

angular.module("pongFighter.filters", [])

  .filter("interpolate", ["version", function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
