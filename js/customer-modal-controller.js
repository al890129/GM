
customers
  .controller('customerModalController', function($scope,$uibModalInstance,$state) {   
  	$scope.close = function() {
  		$uibModalInstance.dismiss('cancel');
  	}

  	$scope.viewCustomers = function() {
	

		$state.go('viewCustomers');

		$uibModalInstance.dismiss('cancel');
  	}
});
