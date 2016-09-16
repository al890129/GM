var customers = angular.module("customers",['ngRoute']);

customers.config(function($routeProvider){
	$routeProvider
	.when('/',
		{
			controller: 'createCustomerController',
			templateUrl: 'view/create-customer.html'
		})
	.otherwise({ redirectTo:'/' })
})


customers.controller("customer-controller",function(){

})