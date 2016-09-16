
customers
  .controller('transitionController', function($scope, $state) {
    
    $scope.createAnotherCustomer = function () {
        //go to create customer view
        $state.go('createCustomer');
    }
    
    $scope.viewCustomers = function () {
        //go to view customer view
        $state.go('viewCustomers');
    }

});
