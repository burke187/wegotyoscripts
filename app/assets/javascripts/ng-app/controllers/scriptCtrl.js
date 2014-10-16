angular.module('Wegotyoscripts')
    .controller('scriptCtrl', function ($scope){
    $scope.items = ["Glasses", "Contacts", "Both"];
    $scope.allScripts = [];
      // resolve: {
      //               scripts: ['$http', function($http){
      //                   return $http.get('/api/scripts.json').then(function(response){
      //                       return response.data;
      //                   })
      //               }]
      //           }
    
    $scope.addScript = function() {
        $scope.allScripts.push({});
        $http.post("/api/scipts", allScripts)
        alert(JSON.stringify($scope.allScripts));
    };
    $scope.removeScript = function(script) {
        var i = _($scope.allScripts).indexOf(script);
        if (i >= 0) $scope.allScripts.splice(i, 1);
    };    
}
});