var myService = function($http, $log) {
  this.getCircles = function() {
      var promise = $http ({
          method : 'GET',
          url : '/ozy/app/data/data.json'
      });
      return promise;
  };
}
myApp.service('myService',myService);
