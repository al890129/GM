customers
  .directive('showCustomerDirective', function () {
    return {
        restrict: 'A',
        templateUrl: '/views/show-customer-directive.html',
        scope: {
            customer: '=showCustomerDirective'
        }
    };
  });
