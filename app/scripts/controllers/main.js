'use strict';

/**
 * @ngdoc function
 * @name clipAdminFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clipAdminFrontApp
 */

var app = angular.module('clipAdminFrontApp');


app.controller('IndexCtrl', function (Session, $state, $scope, $modal) {

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

	$scope.open = function (size) {

	    var modalInstance = $modal.open({
	      templateUrl: 'views/states/newSong.html',
	      controller: 'ModalInstanceCtrl',
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (item) {
	      // TODO
	    }, function () {
	      //console.log('TODO');
	    });
  	};
});


app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

	$scope.selected = "selected"
  $scope.ok = function () {
    $modalInstance.close($scope.selected);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
