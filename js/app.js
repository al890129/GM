//Create the module for the entire AngularJS app.
var customers = angular.module("customers",['ui.router','ui.bootstrap']);

//Define the single page applicaion with stateProvider service navigate to different view.
customers.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	  .state('createCustomer', {
      url: '/',
      controller: 'createCustomerController',
      templateUrl: 'view/create-customer.html',
      params: {
				'index': -1,
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

//Name the host controller and injected it to index.html page
customers.controller("customer-controller",function(){

})