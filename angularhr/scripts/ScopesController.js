/**
 * Created by Ionutz on 12.05.2015.
 */

hrApp.controller('ScopesController', ['$scope', function($scope) {
    $scope.title = 'Two Way Binding Demo';
    $scope.childTemplate = 'templates/childscope.html';

    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };

    $scope.setFirstVariable = function(value) {
        $scope.firstVariable = value;
    };
}]);