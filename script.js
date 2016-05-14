// create the module
// also include ngRoute for all our routing needs
    var myApp = angular.module('myApp', ['ngRoute']);

    // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the projects page
            .when('/resources', {
                templateUrl : 'pages/resources.html',
                controller  : 'resourcesController'
            });
    });

    // create the controller and inject Angular's $scope
    myApp.controller('mainController', function($scope) {
      
    });

    myApp.controller('aboutController', function($scope) {
      
    });

    myApp.controller('resourcesController', function($scope) {
        
    });