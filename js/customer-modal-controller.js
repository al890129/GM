
customers
  .controller('customerModalController', function($scope,$uibModalInstance,$state) {   
  	$scope.close = function() {
  		$uibModalInstance.dismiss('cancel');
  	}

  	$scope.viewCustomers = function() {
	

		$state.go('viewCustomers');

		$uibModalInstance.dismiss('cancel');
  	}

  	$scope.createAnotherCustomer = function() {
  		$uibModalInstance.dismiss('cancel');
  		document.getElementById('customerForm').reset();
  	}
});
