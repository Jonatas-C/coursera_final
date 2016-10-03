(function() {

	'use strict';

	angular
		.module('app.discoverdetail')
		.factory('DiscoverDetailService', function ($q, $http) {
        return {
            get: function (id) {
              var deferred = $q.defer(),

              httpPromise = $http.get('http://localhost:3000/api/startups/'+id);

              httpPromise.then(
                function (response) {
                  deferred.resolve(response);
                },
                function (error) {
                  console.error(error);
                }
              );
              return deferred.promise;
            },
            like: function (id, likes) {

                  var result = $http({
                          url: 'http://localhost:3000/api/startups/'+id,
                          method: "PUT",
                          data: {'likes': likes }
                      })
                      .then(function(response) {
                           
                              return response.data;
                      }, 
                      function(response) { // optional
                           return response.data;
                      });

                    return result ;
            },
            /*comment: function (id) {

                  var result = $http({
                          url: 'http://localhost:3000/api/startups/'+id,
                          method: "PUT",
                          data: {'likes': likes }
                      })
                      .then(function(response) {
                           
                              return response.data;
                      }, 
                      function(response) { // optional
                           return response.data;
                      });

                    return result ;
            },*/

        };

    })
		.controller('DiscoverDetailController', function($scope, $stateParams, DiscoverDetailService){
      DiscoverDetailService.get($stateParams.id).then(function (response) {$scope.discover = response.data});

      $scope.Like = function (response) {
          var result = DiscoverDetailService.like($scope.discover.id, $scope.discover.likes+1);
          DiscoverDetailService.get($stateParams.id).then(function (response) {$scope.discover = response.data});
          
      };
			/*$scope.startupList = [
				{_id:0, nome:'Startup A', imagem:'http://fcbayern.com.br/images/team-logos/bayern-munchen-logo.png', descricao:'blba balsadsad asd asdsa dasdasdas', industria: 'esporte', fundacao:2016, encerramento: '2016-01-01', timestamp:'2016-01-01', historia:'fdsfsd fdsf dsfsdfsdf', cidade:'São Paulo', id_usuario:1, curtidas:10},
        {_id:1, nome:'Startup AB', imagem:'http://fcbayern.com.br/images/team-logos/bayern-munchen-logo.png', descricao:'blba balsadsad asd asdsa dasdasdas', industria: 'esporte', fundacao:2016, encerramento: '2016-01-01', timestamp:'2016-01-01', historia:'fdsfsd fdsf dsfsdfsdf', cidade:'São Paulo', id_usuario:1, curtidas:10},
        {_id:2, nome:'Startup ABC', imagem:'http://fcbayern.com.br/images/team-logos/bayern-munchen-logo.png', descricao:'blba balsadsad asd asdsa dasdasdas', industria: 'esporte', fundacao:2016, encerramento: '2016-01-01', timestamp:'2016-01-01', historia:'fdsfsd fdsf dsfsdfsdf', cidade:'São Paulo', id_usuario:1, curtidas:10}
			];
      $scope.discover = $scope.startupList[$stateParams.id];*/
		})
    .controller('CommentController', function($scope, DiscoverDetailService) {
            
            $scope.comment = {rating:5, comment:"", author:"", date:""};
            
            $scope.sendComment = function () {
                $scope.comment.date = new Date().toISOString();
                console.log($scope.comment);
                $scope.dish.comments.push($scope.comment);

                menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);
                $scope.commentForm.$setPristine();
                $scope.comment = {rating:5, comment:"", author:"", date:""};
            }
    });
})();
