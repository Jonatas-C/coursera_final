(function() {
	
	'use strict';
	
	angular
		.module('app.share')
    .factory('ShareService', function ($http) {
            return {
                share: function (name, description, industry, story, foundation, closure, city) {

 
                  var result = $http({
                          url: 'http://localhost:3000/api/startups',
                          method: "POST",
                          data: {'name':name, 'description': description, 'industry': industry, 'story': story, 'foundation': foundation, 'closure': closure, 'city': city }
                      })
                      .then(function(response) {
                           
                              return response.data;
                      }, 
                      function(response) { // optional
                           return response.data;
                      });

                    return result ;
                }                
            };

        })
    .controller('ShareController', function ($scope, ShareService) {
            $scope.Story = { name:'', description:'', industry:'', story:'', foundation:'', closure:'', city:''};
            
            $scope.save = function () {

            var result = ShareService.share($scope.Story.name, $scope.Story.description, $scope.Story.industry, $scope.Story.story, $scope.Story.foundation, $scope.Story.closure, $scope.Story.city);
            console.log(result);
            //$scope.storyForm.$setPristine();
            };
        });
	
})();