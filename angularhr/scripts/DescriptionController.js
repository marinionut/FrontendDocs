/**
 * Created by Ionutz on 12.05.2015.
 */

hrApp.controller('DescriptionController', ['$scope'], function($scope))
{

    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';

    $scope.resetFirstVariable = function () {
        $scope.firstVariable = undefined;
    };

    $scope.setFirstVariable = function (val) {
        $scope.firstVariable = val;
    };

    $scope.myVal = 'Descroption Controller';
    console.log('Descroption Controller OK init!');
}]);