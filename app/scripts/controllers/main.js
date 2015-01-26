'use strict';

/**
 * @ngdoc function
 * @name clipAdminFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clipAdminFrontApp
 */

var app = angular.module('clipAdminFrontApp');


app.controller('IndexCtrl', function ($state, $scope) {

	$scope.changeState = function() {
		
		if ($state.current.name.indexOf("home") == -1)
			$state.go('home');
		else
			$state.go('login');
	}
  }
);
