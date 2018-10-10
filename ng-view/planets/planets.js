myApp.controller('planetsController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
    
    $scope.name = 'Planets';
    $scope.page = $routeParams.page || 1;
    $scope.pagination = [];

    $http.get("https://swapi.co/api/planets/?page=" + $scope.page)
    .then(function(response) {
        $scope.planets = response.data.results;
        $scope.count = response.data.count;
        $scope.pages = Math.round(response.data.count / 10);
        for(var i=1; i<=$scope.pages; i++) {
            $scope.pagination.push(i);
        }
    });
}]);