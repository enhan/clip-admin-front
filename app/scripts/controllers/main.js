'use strict';

/**
 * @ngdoc function
 * @name clipAdminFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clipAdminFrontApp
 */

var app = angular.module('clipAdminFrontApp');


app.controller('IndexCtrl', function (Session, $state, $scope) {

	if(!Session.getUserMail() && $state.current.name.indexOf("home") == 0)
		$state.go('login');

	$scope.changeState = function() {
		
		if ($state.current.name.indexOf("home") == -1)
			$state.go('home');
		else
			$state.go('login');
	}

	$scope.signIn = function() {
		if($scope.email == "email@email") {
			$scope.signInSuccess = true;
			$state.go('home');
			Session.setUserMail($scope.email);
		}
			
	}
  }
);
