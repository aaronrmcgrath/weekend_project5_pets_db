// FACTORY - saves all information to/from DB that is passed between views

myApp.factory('PetService', ['$http', function($http) {

  var pets = {};


// GREETING FUNCTION
    var greeting = function() {
      console.log('Greeting Works!');
    };


// GET FUNCTION TO SAVE INFO RETRIEVED FROM DB
    var getData = function() {
      $http.get('/pets').then(function(res){
          // console.log('RESPONSE IN FACTORY: ', res);

          pets.data = res.data;
          console.log('Here is pets object: ', pets.data);
          return pets.data;
      });
    };

//  POST FUNCTION TO SAVE INFO TO BE POSTED TO DB
    var postData = function(data) {
      $http.post('/pets', data).then(function(res){
          console.log(res.data);
      });
    };

// INITAL CALL TO LOAD VIEW FROM DB

    var initCall = function() {
      if(pets.data === undefined) {
        $http.get('/pets').then(function(res){
          pets.data = res.data;
        });
      }
    };


// RETURN: FACTORY OUTPUT
    return {
      postData: postData,
      getData: getData,
      greeting: greeting,
      pets: pets,
      initCall: initCall
    };

}]);
