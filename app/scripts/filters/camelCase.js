'use strict';

// camelCase To Human Filter
// ---------------------
// Converts a camelCase string to a human readable string.
// i.e. myVariableName => My Variable Name

//var app = angular.module('myapp');

angular.module('auxFeatures', [])
	.filter('camelCase', function() {
	  return function(input) {
	    return input.charAt(0).toUpperCase() + input.substr(1).replace(/[A-Z]/g, ' $&');
	  };
	});