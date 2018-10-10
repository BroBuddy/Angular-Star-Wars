myApp.controller('filmsController', ['$scope', '$log', '$http', function($scope, $log, $http) {
    
    $scope.name = 'Films';

    $http.get("https://swapi.co/api/films")
    .then(function(response) {
        $scope.films = response.data.results;
        $scope.count = response.data.count;
    });
    
}]);