(function() {

	'use strict';

	angular
		.module('app.meetdetail')
    .factory('MeetDetailService', function ($q, $http) {
        return {
            get: function (id) {
              var deferred = $q.defer(),

              httpPromise = $http.get('http://localhost:3000/api/usuarios/'+id);

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
        };

    })
		.controller('MeetDetailController', function($scope, $stateParams, MeetDetailService){
      MeetDetailService.get($stateParams.id).then(function (response) {$scope.meet = response.data; console.log($scope.meet)});
			/*$scope.meetList = [
				{_id: 0, nome:'Jônatas', imagem:'http://hp.imguol.com.br/c/home/29/2016/08/23/23ago2016---montagem-mostra-fernando-haddad-pt-marta-suplicy-pmdb-e-joao-doria-jr-psdb-no-primeiro-debate-entre-candidatos-a-prefeito-em-sao-paulo-1471936501609_300x100.png', interesse:'Educação', cargo: 'Filósofo', endereco: 'Avenida Paulista, 100', login:'jonatas', senha: '123456', timestamp: '2016-06-01'},
        {_id: 1, nome:'Alexandre', imagem:'http://hp.imguol.com.br/c/home/29/2016/08/23/23ago2016---montagem-mostra-fernando-haddad-pt-marta-suplicy-pmdb-e-joao-doria-jr-psdb-no-primeiro-debate-entre-candidatos-a-prefeito-em-sao-paulo-1471936501609_300x100.png', interesse:'Finanças', cargo: 'Filósofo', endereco: 'Avenida Paulista, 100', login:'jonatas', senha: '123456', timestamp: '2016-06-01'},
        {_id: 2, nome:'Antonio', imagem:'http://hp.imguol.com.br/c/home/29/2016/08/23/23ago2016---montagem-mostra-fernando-haddad-pt-marta-suplicy-pmdb-e-joao-doria-jr-psdb-no-primeiro-debate-entre-candidatos-a-prefeito-em-sao-paulo-1471936501609_300x100.png', interesse:'Educação', cargo: 'Filósofo', endereco: 'Avenida Paulista, 100', login:'jonatas', senha: '123456', timestamp: '2016-06-01'}
			];
      $scope.meet = $scope.meetList[$stateParams.id];*/
		});

})();
