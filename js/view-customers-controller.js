
customers
  .controller('viewCustomersController', function($scope,$state) {
    if(localStorage) {
        $scope.customers = JSON.parse(localStorage.getItem('savedCustomers'));
    }
    
    $scope.edit = function (index) {
        //use routeProvider to go to edit view, pass customerID or index
        // $state.go('editCustomer');
        $state.go('createCustomer', 
        	
        	{ index: index });

    
    };
    

});
