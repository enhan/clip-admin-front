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

  $urlRouterProvider.otherwise("/login");

    //RestangularProvider.setBaseUrl("http://clip.cleverapps.io/");
    RestangularProvider.setBaseUrl("http://localhost:9000/");

  $stateProvider.state("login", {
    url: "/login",
    templateUrl: "views/states/login.html",
    controller: "IndexCtrl"
  }).state("home", {
    url: "/home",
    templateUrl: "views/states/home.html",
    controller: "IndexCtrl"
  });

});
