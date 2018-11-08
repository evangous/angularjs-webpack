angular.module('PeoplePerHour').factory('getRequest', function($http) {

    let getRequest = {};
    var api = 'https://rickandmortyapi.com/api/character/';

    // characters listing RESTfull API call with filters and paging
    getRequest.characters = function(page=1,gender,species,status){
        return $http.get(api, { params: { page: page, gender: gender, species: species, status: status  } });
    };
    
    // single character information RESTfull API call
    getRequest.episode = function(url){
        return $http.get(url, {
            headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json; charset=utf-8' }
        });
    };

    return getRequest;

});
