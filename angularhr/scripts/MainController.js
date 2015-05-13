/**
 * Created by Ionutz on 12.05.2015.
 */

hr.App('MainController', ['$scope', '@rootScope', '$timeout', function($scope, $rootScope, $timeout) {
    $scope.name = 'Enter name';

    $timeout(function() {
        console.log('Scope: ' + $scope.name);
        console.log('Root Scope: ' + rootScope.name);
    }
    );
}]);