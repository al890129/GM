customers
.controller('createCustomerController', function($scope,$state,$uibModal,$stateParams) {
  	$scope.customers = [];
    $scope.buttonlabel = "Register";
    $scope.isEdit = $stateParams.index ? true : false;


    console.log("$scope.isEdit?:",$scope.isEdit);
    console.log($stateParams.index);

    $scope.buttonCallback = function (customer) {

        var customer = {
            email: $scope.email,
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            phonenumber: $scope.phonenumber || "",
            address: $scope.address || ""
        };
        if(!$scope.isEdit && $scope.validInput) {
            $scope.customers.push(customer);
            localStorage.setItem("savedCustomers", JSON.stringify($scope.customers));

            console.log('$scope.customers? ', JSON.parse(localStorage.getItem("savedCustomers")));

           
            document.getElementById('customerForm').reset();
            var modalInstance = $uibModal.open({
                templateUrl: 'view/customer-modal.html',
                controller: 'customerModalController',
            });    
        }else{
            var index = $stateParams.index;
            $scope.customers = JSON.parse(localStorage.getItem("savedCustomers"));
            $scope.customers.splice(index, 1, customer);
            document.getElementById('customerForm').reset();

            console.log('after setItem, $scope.customers is? ', $scope.customers);
            $state.go('viewCustomers',
                {
                    customerArray: $scope.customers
                });
        }
    };

    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $scope.validEmail = function() {   
        if(regex.test($scope.email)) {
            return true;
        }
            return false;
    }

    $scope.validInput =function () {
            if($scope.validEmail() && $scope.firstname && $scope.lastname) {
                console.log('valid email');
                return true;    
            } else {
                console.log('not valid email');
                 return false;
            }
        }

    if($scope.isEdit) {
        $scope.buttonlabel = "Update";
        var currentCustomer = JSON.parse(localStorage.getItem("savedCustomers"))[$stateParams.index];
        console.log("currentCustomer?:",currentCustomer)
        $scope.email = currentCustomer.email;
        $scope.firstname = currentCustomer.firstname;
        $scope.lastname = currentCustomer.lastname;
        $scope.phonenumber = currentCustomer.phonenumber;
        $scope.address = currentCustomer.address;
    }
});
