//Controller for view customer template
customers
  .controller('viewCustomersController', function($scope,$state,$stateParams) {
    $scope.customers = JSON.parse(localStorage.getItem('savedCustomers'));
    if($stateParams.customerArray) {
        $scope.customers = $stateParams.customerArray;
    }
//Pass the index of current customer back to first page to edit
    $scope.edit = function (index) {
       
        $state.go('createCustomer', 
        	
        	{ index: index });
    };
//Delete the current customer
    $scope.delete = function (index) {
        $scope.customers.splice(index, 1);
    }
    

});
