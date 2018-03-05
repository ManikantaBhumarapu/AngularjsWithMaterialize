
var app = angular.module('myapp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'homeController',
                templateUrl: 'views/home.html'
            });
            
  
   
    $routeProvider
    .when('/userslist',
        {
            controller: 'userslistController',
            templateUrl: 'views/userlist.html'
        });

   
    $routeProvider.otherwise({ redirectTo: '/' });
});




