myApp.controller('personController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
    
    $scope.name = 'Person details';
    $scope.id = $routeParams.id;
    $scope.films = [];
    $scope.species = [];

    $http.get("https://swapi.co/api/people/" + $scope.id)
    .then(function(response) {
        $scope.person = response.data;

        angular.forEach($scope.person.films, function(value, key) {
            $http.get(value)
            .then(function(response) {
                $scope.films.push({
                    name: response.data.title,
                    url: response.data.url.slice(27)
                });
            });
        });

        angular.forEach($scope.person.species, function(value, key) {
            $http.get(value)
            .then(function(response) {
                $scope.species.push({
                    name: response.data.name,
                    url: response.data.url.slice(29)
                });
            });
        });
    });
}]);