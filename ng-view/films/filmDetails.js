myApp.controller('filmDetailsController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
    
    $scope.name = 'Film details';
    $scope.id = $routeParams.id;
    $scope.characters = [];
    $scope.planets = [];
    $scope.species = [];

    $http.get("https://swapi.co/api/films/" + $scope.id)
    .then(function(response) {
        $scope.film = response.data;

        angular.forEach($scope.film.characters, function(value, key) {
            $http.get(value)
            .then(function(response) {
                $scope.characters.push({
                    name: response.data.name,
                    url: response.data.url.slice(28)
                });
            });
        });

        angular.forEach($scope.film.planets, function(value, key) {
            $http.get(value)
            .then(function(response) {
                $scope.planets.push({
                    name: response.data.name,
                    url: response.data.url.slice(29)
                });
            });
        });

        angular.forEach($scope.film.species, function(value, key) {
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