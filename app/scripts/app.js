'use strict';

/**
 * @ngdoc overview
 * @name clipAdminFrontApp
 * @description
 * # clipAdminFrontApp
 *
 * Main module of the application.
 */
var app = angular
  .module('clipAdminFrontApp', [
    'ngCookies',
    'ngTouch',
    'restangular',
    'ui.router'
  ]);


app.config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider.state("index", {
    url: "/",
    templateUrl: "views/states/home.html",
    controller: 'IndexCtrl'
  });

});
