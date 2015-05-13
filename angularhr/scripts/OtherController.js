/**
 * Created by Ionutz on 13.05.2015.
 */
hrApp.controller('OtherController', ['$scope', function($scope) {
    $scope.title = undefined;

    $scope.setTitle = function() {
        $scope.title = 'New Title';
    }
}])