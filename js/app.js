var app = angular.module('MonApp',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {templateUrl: 'partials/home.html'})
	.when('/comments/:id', {templateUrl: 'partials/comments.html'})
	.otherwise({redirectTo : '/'})
}]);