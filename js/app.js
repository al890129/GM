var customers = angular.module("customers",['ui.router','ui.bootstrap']);

// customers.config(function($routeProvider,$locationProvider){
// 	$routeProvider
// 	.when('/',
// 		{
// 			controller: 'createCustomerController',
// 			templateUrl: 'view/create-customer.html'
// 		})
// 	.when('/viewCustomers/',
// 		{
// 			controller: 'viewCustomersController',
// 			templateUrl: 'view/view-customers.html'
// 		})
// 	.otherwise({ redirectTo:'/' })
// })

customers.config(function($stateProvider){
	$stateProvider
	  .state('createCustomer', {
      url: '/',
      controller: 'createCustomerController',
      templateUrl: 'view/create-customer.html',
      params: {
				'index': ""
			}
    })
    
    .state('viewCustomer', {
      url: '/viewCustomers',
      templateUrl: 'view/view-customers.html',
      controller: 'viewCustomersController',
      params: {
				'index': ""
			}
    })

    $urlRouterProvider.otherwise('/');
})


customers.run(function($location) {
	$location.url('/')
})

customers.controller("customer-controller",function(){

})