var controllers = {};

controllers.HeaderController = function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
  };
};

controllers.View1Controller = function($log,$scope) {
  $scope.logToConsole = function() {
    $log.log($scope.name);
  }
};

controllers.View2Controller = function ($scope, myService) {
  myService.getCircles().then(function(response) {
    $scope.circles = response.data;
  });
};


controllers.View3Controller = function($scope) {
  $scope.getName = function() {
    var scopeName = $scope.name;
    return (scopeName && scopeName.length>0) ? scopeName : 'bikram';
  }
};

myApp.controller(controllers);
