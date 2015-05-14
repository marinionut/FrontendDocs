hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.employeeActionList = [
        {
            label: "Employee list",
            url: "#/employeeslist"
        },
        {
            label: "Add employee",
            url: "#/employeeadd"
        }

];

    // TODO #12 - load menu items from Value

    $scope.currentDate = new Date();

}]);
