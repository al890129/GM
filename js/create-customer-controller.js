
customers
.controller('createCustomerController', function($scope) {
  	console.log('in creatCustomerController?');
    $scope.customers = [];
    $scope.validInput = false;
    
    $scope.register = function (customer) {
    	var customer = {
    		email: $scope.email,
    		firstname: $scope.firstname,
    		lastname: $scope.lastname,
    		phonenumber: $scope.phonenumber,
    		address: $scope.address
    	};

    	$scope.customers.push(customer);
    	storage.setItem(savedCustomers, $scope.customers);
    	console.log('$scope.customers? ', $scope.customers);
    };

    function validEmail (email) {
        console.log("a")
    	var regex = /^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
        var goodEmail = regex.test(email);
    	if(email && goodEmail) {
    		return true;
    	} else {
    		return false;
    	}
    }

    function validPhonenumber () {

    }

    if(validEmail($scope.email) && $scope.firstname && $scope.lastname) {
    	$scope.validInput = true;
    }

    

});
