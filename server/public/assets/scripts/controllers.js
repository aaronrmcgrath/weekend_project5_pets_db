// CONTROLLERS - AddPetController & ViewPetController:

// GREETING Because saying hi is nice!
myApp.controller('GreetingController', ['$scope', 'PetService', function($scope, PetService){
  var petService = PetService;

  petService.greeting();
}]);

// RETRIEVES PET INFO FROM DB
myApp.controller('ViewPetController', ['$scope', 'PetService', function($scope, PetService) {
  var petService = PetService;


  // INITIALIZE VIEW
  petService.initCall();

  // GET HERE
  petService.getData();
  // console.log('* PETSERVICE: ', petService);
  console.log('--*** : ', petService.pets);


  $scope.petsArray = petService.pets;
  console.log('petsArray: ', $scope.petsArray);


}]);

// SUBMITS FORM AND ADDS PET TO DB
myApp.controller('AddPetController', ['$scope', 'PetService', function($scope, PetService){
  var petObject = {};
  var petService = PetService;

  // POST HERE
  $scope.submit = function(data) {
    petService.postData(data);
  };
}]);
