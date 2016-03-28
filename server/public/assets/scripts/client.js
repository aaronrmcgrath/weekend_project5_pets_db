var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: '/views/routes/home.html',
            controller: 'ViewPetController'
        }).
        when('/view', {
            templateUrl: '/views/routes/view.html',
            controller: 'ViewPetController'
        }).
        when('/add', {
            templateUrl: '/views/routes/add.html',
            controller: 'AddPetController'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);
