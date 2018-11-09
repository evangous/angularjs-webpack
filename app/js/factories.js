angular.module('PeoplePerHour').factory('getRequest', function($http) {

    let getRequest = {};
    
    var character = 'https://rickandmortyapi.com/api/character/';
    var episode = 'https://rickandmortyapi.com/api/episode/';

    // characters listing RESTfull API call with filters and paging
    getRequest.characters = function(page=1,gender,species,status){
        page = '?page='+page;
        gender = (gender) ? '&gender='+gender : '';
        species = (species) ? '&species='+species : '';
        status = (status) ? '&status='+status : '';
        url = character+page+gender+species+status;
        console.log({url});
        return $http.get(url, { headers: { 'Content-Type': 'application/json' } });
    };

    // single character information RESTfull API call
    getRequest.episode = function(numbers){
        url = episode+numbers;
        console.log({url});
        return $http.get(url, { headers: { 'Content-Type': 'application/json' } });
    };

    return getRequest;

});
