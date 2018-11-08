angular.module('PeoplePerHour').factory('getRequest', function($http) {

    let getRequest = {};
    var api = 'https://rickandmortyapi.com/api/character/';

    getRequest.characters = function(page=1,gender,species,status){
        page = '?page='+page;
        gender = (gender) ? '&gender='+gender : '';
        species = (species) ? '&species='+species : '';
        status = (status) ? '&status='+status : '';
        url = api+page+gender+species+status;

        return $http.get(url, {
            headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json; charset=utf-8' }
        });

    };
    getRequest.episode = function(url){
        return $http.get(url, {
            headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json; charset=utf-8' }
        });
    };

    return getRequest;

});
