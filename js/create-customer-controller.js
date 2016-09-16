customers
.controller('createCustomerController', function($scope,$uibModal,$stateParams) {
  	$scope.customers = [];
    $scope.validInput = false;
    $scope.isEdit = $stateParams.index ? true : false;

    console.log($stateParams.index)

    $scope.register = function (customer) {
        if (typeof(Storage) !== "undefined") {

            var customer = {
                email: $scope.email,
                firstname: $scope.firstname,
                lastname: $scope.lastname,
                phonenumber: $scope.phonenumber,
                address: $scope.address
            };

            $scope.customers.push(customer);
            localStorage.setItem("savedCustomers", JSON.stringify($scope.customers));

            console.log('$scope.customers? ', JSON.parse(localStorage.getItem("savedCustomers")));
        }else{
            console.log('localStorage not available');
        }

        var modalInstance = $uibModal.open({
            templateUrl: 'view/customer-modal.html',
            controller: 'customerModalController',
        });
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

});
