angular.module('PeoplePerHour', ['ng','ngRoute','ngDialog'])
.config( function($routeProvider, $locationProvider) {

$routeProvider

    .when('/', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })
    .when('/characters', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })

    .when('/characters/page/:page', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })
    .when('/characters/gender/:selectedgender', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })
    .when('/characters/species/:selectedspecies', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })
    .when('/characters/status/:selectedstatus', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })

    .when('/characters/gender/:selectedgender/page/:page', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })
    .when('/characters/species/:selectedspecies/page/:page', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })
    .when('/characters/status/:selectedstatus/page/:page', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })

    .when('/characters/gender/:selectedgender/species/:selectedspecies', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })
    .when('/characters/gender/:selectedgender/status/:selectedstatus', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })
    .when('/characters/species/:selectedspecies/status/:selectedstatus', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })

    .when('/characters/gender/:selectedgender/species/:selectedspecies/page/:page', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })
    .when('/characters/gender/:selectedgender/status/:selectedstatus/page/:page', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })
    .when('/characters/species/:selectedspecies/status/:selectedstatus/page/:page', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })

    .when('/characters/gender/:selectedgender/species/:selectedspecies/status/:selectedstatus', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })
    .when('/characters/gender/:selectedgender/species/:selectedspecies/status/:selectedstatus/page/:page', {
      templateUrl: 'templates/characters.html',
      controller: 'CharactersController'
    })

    .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    
});
