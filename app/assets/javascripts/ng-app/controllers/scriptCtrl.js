angular.module('Wegotyoscripts')
    .controller('scriptCtrl', function ($scope){
    $scope.title1 = "Select Prescription Type";
    $scope.items = ["Glasses", "Contacts", "Both"];
    $scope.allScripts = [];
    
    $scope.addScript = function() {
        $scope.allScripts.push({});
    };
    $scope.removeScript = function(script) {
        var i = _($scope.allScripts).indexOf(script);
        if (i >= 0) $scope.allScripts.splice(i, 1);
    };    
}
});