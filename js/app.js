var app = angular.module('lasv', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: "MainController",
        templateUrl: "js/partials/splash.html"
      })
      .when('/home', {
        controller: "MainController",
        templateUrl: "js/partials/home.html"
      })
      .when('/login', {
        controller: "MainController",
        templateUrl: "js/partials/login.html"
      })
      .otherwise({
        template: '<div><h1>No Page Located Here</h1></div>'
      })
});
