
customers
  .controller('editCustomerController', function($scope, $stateParams) {
    if(localStorage) {
      $scope.customers = localStorage.getItem(savedCustomers);
    }

    var customerBeingEdit = $scope.customers[$stateParams.index]
    $scope.customer.email = customerBeingEdit.email;
    $scope.customer.firstname = customerBeingEdit.firstname;
    $scope.customer.lastname = customerBeingEdit.lastname;
    $scope.customer.phonenumber = customerBeingEdit.phonenumber;
    $scope.customer.address = customerBeingEdit.address;
    
    
    $scope.update = function (index) {
      var customer = {
    		email: $scope.customer.email,
    		firstname: $scope.customer.firstname,
    		lastname: $scope.customer.lastname,
    		phonenumber: $scope.customer.phonenumber,
    		address: $scope.customer.address
    	};

    	$scope.customers[index] = customer;
    	storage.setItem(savedCustomers, $scope.customers);
    }
    

});
