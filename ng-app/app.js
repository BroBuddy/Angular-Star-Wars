var myApp = angular.module('myApp', ['ngRoute', 'ngTable']);

myApp.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'ng-view/main/main.html',
        controller: 'mainController'
    })
    
    .when('/films', {
        templateUrl: 'ng-view/films/films.html',
        controller: 'filmsController'
    })
    
    .when('/film/:id', {
        templateUrl: 'ng-view/films/filmDetails.html',
        controller: 'filmDetailsController'
    })
    
    .when('/people/:page', {
        templateUrl: 'ng-view/people/people.html',
        controller: 'peopleController'
    })
    
    .when('/person/:id', {
        templateUrl: 'ng-view/people/personDetails.html',
        controller: 'personController'
    })
    
    .when('/planets/:page', {
        templateUrl: 'ng-view/planets/planets.html',
        controller: 'planetsController'
    })
    
    .when('/planet/:id', {
        templateUrl: 'ng-view/planets/planetDetails.html',
        controller: 'planetDetailsController'
    })
    
    .when('/species/:page', {
        templateUrl: 'ng-view/species/species.html',
        controller: 'speciesController'
    })
    
    .when('/specie/:id', {
        templateUrl: 'ng-view/species/specieDetails.html',
        controller: 'specieDetailsController'
    })
    
    .when('/starships/:page', {
        templateUrl: 'ng-view/starships/starships.html',
        controller: 'starshipsController'
    })
    
    .when('/starship/:id', {
        templateUrl: 'ng-view/starships/starshipDetails.html',
        controller: 'starshipDetailsController'
    })
    
    .when('/vehicles/:page', {
        templateUrl: 'ng-view/vehicles/vehicles.html',
        controller: 'vehiclesController'
    })
    
    .when('/vehicle/:id', {
        templateUrl: 'ng-view/vehicles/vehicleDetails.html',
        controller: 'vehicleDetailsController'
    })
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'SWAPI';
    
}]);

myApp.controller('speciesController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
    
    $scope.name = 'Species';
    $scope.page = $routeParams.page || 1;
    $scope.pagination = [];

    $http.get("https://swapi.co/api/species/?page=" + $scope.page)
    .then(function(response) {
        $scope.species = response.data.results;
        $scope.count = response.data.count;
        $scope.pages = Math.round(response.data.count / 10);
        for(var i=1; i<=$scope.pages; i++) {
            $scope.pagination.push(i);
        }
    });
}]);

myApp.controller('specieDetailsController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
    
    $scope.name = 'Specie details';
    $scope.id = $routeParams.id;
    $scope.films = [];
    $scope.characters = [];

    $http.get("https://swapi.co/api/species/" + $scope.id)
    .then(function(response) {
        $scope.specie = response.data;

        angular.forEach($scope.specie.films, function(value, key) {
            $http.get(value)
            .then(function(response) {
                $scope.films.push({
                    name: response.data.title,
                    url: response.data.url.slice(27)
                });
            });
        });

        angular.forEach($scope.specie.people, function(value, key) {
            $http.get(value)
            .then(function(response) {
                $scope.characters.push({
                    name: response.data.name,
                    url: response.data.url.slice(28)
                });
            });
        });
    });
}]);

myApp.controller('starshipsController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
    
    $scope.name = 'Starships';
    $scope.page = $routeParams.page || 1;
    $scope.pagination = [];

    $http.get("https://swapi.co/api/starships/?page=" + $scope.page)
    .then(function(response) {
        $scope.starships = response.data.results;
        $scope.count = response.data.count;
        $scope.pages = Math.round(response.data.count / 10);
        for(var i=1; i<=$scope.pages; i++) {
            $scope.pagination.push(i);
        }
    });
}]);

myApp.controller('starshipDetailsController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
    
    $scope.name = 'Starship details';
    $scope.id = $routeParams.id;
    $scope.films = [];
    $scope.pilots = [];

    $http.get("https://swapi.co/api/starships/" + $scope.id)
    .then(function(response) {
        $scope.starship = response.data;

        angular.forEach($scope.starship.films, function(value, key) {
            $http.get(value)
            .then(function(response) {
                $scope.films.push({
                    name: response.data.title,
                    url: response.data.url.slice(27)
                });
            });
        });

        angular.forEach($scope.starship.pilots, function(value, key) {
            $http.get(value)
            .then(function(response) {
                $scope.pilots.push({
                    name: response.data.name,
                    url: response.data.url.slice(28)
                });
            });
        });
    });
}]);

myApp.controller('vehiclesController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
    
    $scope.name = 'Vehicles';
    $scope.page = $routeParams.page || 1;
    $scope.pagination = [];

    $http.get("https://swapi.co/api/vehicles/?page=" + $scope.page)
    .then(function(response) {
        $scope.vehicles = response.data.results;
        $scope.count = response.data.count;
        $scope.pages = Math.round(response.data.count / 10);
        for(var i=1; i<=$scope.pages; i++) {
            $scope.pagination.push(i);
        }
    });
}]);

myApp.controller('vehicleDetailsController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
    
    $scope.name = 'Vehicle details';
    $scope.id = $routeParams.id;
    $scope.films = [];

    $http.get("https://swapi.co/api/vehicles/" + $scope.id)
    .then(function(response) {
        $scope.vehicle = response.data;

        angular.forEach($scope.vehicle.films, function(value, key) {
            $http.get(value)
            .then(function(response) {
                $scope.films.push({
                    name: response.data.title,
                    url: response.data.url.slice(27)
                });
            });
        });
    });
}]);