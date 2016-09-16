
customers
  .controller('viewCustomersController', function($scope,$state,$stateParams) {
    $scope.customers = JSON.parse(localStorage.getItem('savedCustomers'));
    if($stateParams.customerArray) {
        $scope.customers = $stateParams.customerArray;
    }
    $scope.edit = function (index) {
        //use routeProvider to go to edit view, pass customerID or index
        // $state.go('editCustomer');
        $state.go('createCustomer', 
        	
        	{ index: index });

    
    };

    $scope.delete = function (index) {
        $scope.customers.splice(index, 1);
    }
    

});
