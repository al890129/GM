
customers
  .controller('viewCustomersController', function($scope,$state,$stateParams) {
    $scope.customers = JSON.parse(localStorage.getItem('savedCustomers'));
    if($stateParams.customerArray) {
        $scope.customers = $stateParams.customerArray;
    }
    $scope.edit = function (index) {
       
        $state.go('createCustomer', 
        	
        	{ index: index });
    };

    $scope.delete = function (index) {
        $scope.customers.splice(index, 1);
    }
    

});
