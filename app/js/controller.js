angular.module('PeoplePerHour').controller('CharactersController', function(getRequest, $scope, $location, $routeParams, ngDialog, $timeout, $q, $window) {

    $scope.initiaze = function(){

      $scope.thead = ['id', 'image', 'name', 'status', 'species', 'type', 'gender', 'origin', 'location', 'created']; // , 'episode', 'url'

      $scope.genders = ['female', 'male', 'genderless', 'unknown'];
      $scope.species = ['Human', 'Humanoid', 'Alien', 'Poopybutthole', 'Mytholog', 'Vampire', 'Cronenberg', 'Disease', 'Robot', 'Animal', 'Poopybutthole', 'unknown'];
      $scope.status = ['alive', 'dead', 'unknown'];

      $scope.page = Number($routeParams.page) || 1;
      $scope.selectedgender = $routeParams.selectedgender;
      $scope.selectedspecies = $routeParams.selectedspecies;
      $scope.selectedstatus = $routeParams.selectedstatus;

      $scope.nocharacters = false;
      $scope.singlecharacter = {};

      $scope.limit = columnLimit($window.innerWidth);

      $scope.getCharacters($scope.page, $scope.selectedgender, $scope.selectedspecies, $scope.selectedstatus);

    }

    angular.element($window).bind('resize', function(){
      $scope.$apply(function() {
          $scope.width = $window.innerWidth;
          $scope.height = $window.innerHeight;
          $scope.limit = columnLimit($window.innerWidth);
      });
    });

    var retriesCount = 0;
    $scope.getCharacters = function(page,gender,species,status){
      getRequest.characters(page,gender,species,status)
      .then(
        function(response) {
          $scope.characters = response.data.results;
          $scope.pages = response.data.info.pages;
          $scope.nocharacters = false;
          return true;
        },
        function(reason) {
          if(retriesCount++ < 2){
            // some error, try to recover once again
            return $scope.getCharacters($scope.page, $scope.selectedgender, $scope.selectedspecies, $scope.selectedstatus);
          } else {
            // finally reject
            $scope.nocharacters = true;
            return $q.reject(reason);
          }
        }
      )
    }

    $scope.select = function(page,gender,species,status) {
      gender = (gender) ? '/gender/'+gender : '';
      species = (species) ? '/species/'+species : '';
      status = (status) ? '/status/'+status : '';
      page = (page>1) ? '/page/'+page : '';
      $location.path('/characters'+gender+species+status+page)
    }

    $scope.showCharacter = function(character){
      $scope.singlecharacter = {};
      character.newepisode = [];
      angular.forEach(character.episode, function(url,index){
        getRequest.episode(url).then( function(response){
          // check success-status of returned data
          if(response.status==200){
            character.newepisode[index] = response.data;
            return true;
          } else {
            // reject with error
            return $q.reject('some error occured');
          }
        })
      })
      $scope.singlecharacter = character;
      ngDialog.open({
        templateUrl: 'templates/character.html',
        className: 'ngdialog-theme-default dialog-center',
        scope: $scope
      })
    }

    function columnLimit(width) {
      if (width<520) {
        limit = $scope.thead.length-5;
      } else if (width<700) {
        limit = $scope.thead.length-4;
      } else if (width<780) {
        limit = $scope.thead.length-3;
      } else if (width<850) {
        limit = $scope.thead.length-2;
      }  else if (width<940) {
        limit = $scope.thead.length-1;
      } else {
        limit = $scope.thead.length;
      }
      // console.log({width,limit});
      return limit;
    }

});
