
customers
  .controller('viewCustomersController', function($scope) {
    if(localStorage) {
        $scope.customers = localStorage.getItem(savedCustomers);
    }
    
    $scope.edit = function (index) {
        //use routeProvider to go to edit view, pass customerID or index
        // $state.go('editCustomer');
    };
    

});
