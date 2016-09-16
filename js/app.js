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

customers.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	  .state('createCustomer', {
      url: '/',
      controller: 'createCustomerController',
      templateUrl: 'view/create-customer.html',
      params: {
				'index': ""
			}
    })
    
    .state('viewCustomers', {
      url: '/viewCustomers',
      templateUrl: 'view/view-customers.html',
      controller: 'viewCustomersController',
      params: {
				'index': "",
        'customerArray': ""
			}
    })

    $urlRouterProvider.otherwise('/');
})


customers.run(function($location) {
	$location.url('/')
})

customers.controller("customer-controller",function(){

})