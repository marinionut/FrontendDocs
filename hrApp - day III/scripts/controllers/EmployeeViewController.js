hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory',
    function($scope, $http, $routeParams, $location, commonResourcesFactory) {

        $scope.employee = {};
        var id = $routeParams.employeeid;

        // TODO #HR6 get employee by id
        $http.get(commonResourcesFactory.findOneEmployeeUrl+id)
            .success(function(data, status, header, config) {
                $scope.employee = data;
            })

            .error(function(data, status, headers, config){
                alert("Error:" + status);
            })


        $scope.back = function() {
            // TODO back to Employee List page
            $location.url('/employeeslist');
        }

    }]);