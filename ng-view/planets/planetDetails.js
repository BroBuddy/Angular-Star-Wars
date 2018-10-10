myApp.controller('planetDetailsController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
    
    $scope.name = 'Planet details';
    $scope.id = $routeParams.id;
    $scope.films = [];
    $scope.residents = [];

    $http.get("https://swapi.co/api/planets/" + $scope.id)
    .then(function(response) {
        $scope.planet = response.data;

        angular.forEach($scope.planet.films, function(value, key) {
            $http.get(value)
            .then(function(response) {
                $scope.films.push({
                    name: response.data.title,
                    url: response.data.url.slice(27)
                });
            });
        });

        angular.forEach($scope.planet.residents, function(value, key) {
            $http.get(value)
            .then(function(response) {
                $scope.residents.push({
                    name: response.data.name,
                    url: response.data.url.slice(28)
                });
            });
        });
    });
}]);