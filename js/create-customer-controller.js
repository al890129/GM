customers
.controller('createCustomerController', function($scope,$state,$uibModal,$stateParams) {
  	$scope.customers = [];
    $scope.validInput = false;
    $scope.buttonlabel = "Register";
    $scope.isEdit = $stateParams.index ? true : false;

    console.log($stateParams.index);



    $scope.buttonCallback = function (customer) {
        var customer = {
            email: $scope.email,
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            phonenumber: $scope.phonenumber || "",
            address: $scope.address || ""
        };
        if(!$scope.isEdit) {
            $scope.customers.push(customer);
            localStorage.setItem("savedCustomers", JSON.stringify($scope.customers));

            console.log('$scope.customers? ', JSON.parse(localStorage.getItem("savedCustomers")));

            document.getElementById('customerForm').reset();
            var modalInstance = $uibModal.open({
                templateUrl: 'view/customer-modal.html',
                controller: 'customerModalController',
            });
            
        } else{
            var index = $stateParams.index;
            $scope.customers = JSON.parse(localStorage.getItem("savedCustomers"));
            // $scope.customers[index] = customer;
            $scope.customers.splice(index, 1, customer);
            document.getElementById('customerForm').reset();

            // localStorage.setItem("savedCustomers", $scope.customers);
            console.log('after setItem, $scope.customers is? ', $scope.customers);
            $state.go('viewCustomers',
                {
                    customerArray: $scope.customers
                });
        }

    };


    $scope.validEmail =function () {
        var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
            if(regex.test($scope.email)) {
                console.log('valid email');
                return true;
            } else {
                console.log('not valid email');
                return false;
            }
    }

    if($scope.validEmail() && $scope.firstname && $scope.lastname) {
        $scope.validInput = true;
        console.log('validInput!!!', $scope.validInput);
    } else{
      console.log('invalid????', $scope.validInput);  
    }

    if($scope.isEdit) {
        $scope.buttonlabel = "Update";
        var currentCustomer = JSON.parse(localStorage.getItem("savedCustomers"))[$stateParams.index];
        $scope.email = currentCustomer.email;
        $scope.firstname = currentCustomer.firstname;
        $scope.lastname = currentCustomer.lastname;
        $scope.phonenumber = currentCustomer.phonenumber;
        $scope.address = currentCustomer.address;
    }

});
