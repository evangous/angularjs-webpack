angular.module('PeoplePerHour').factory('getRequest', function($http) {

    let getRequest = {};

    getRequest.characters = function(page=1,gender,species,status){
        page = '?page='+page;
        gender = (gender) ? '&gender='+gender : '';
        species = (species) ? '&species='+species : '';
        status = (status) ? '&status='+status : '';
        return $http.get('https://rickandmortyapi.com/api/character/'+page+gender+species+status);
    };
    getRequest.episode = function(url){
        return $http.get(url);
    };

    return getRequest;

});
