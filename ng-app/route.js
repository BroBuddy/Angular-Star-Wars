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