(function() {

	'use strict';

	angular
		.module('app.leverage')
		.factory('LeverageService', function ($q, $http) {
		    return {
		        get: function () {
							var deferred = $q.defer(),

							httpPromise = $http.get('http://localhost:3000/api/startups');

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
		.controller('LeverageController', function($scope, LeverageService, $uibModal){
			LeverageService.get().then(function (response) {$scope.startupList = response.data; });

			$scope.greaterThan = function(prop, val){
    			return function(item){
      				return item[prop] > val;
    			}
			};
			/*$scope.startupList = [
				{_id:0, nome:'Startup A', imagem:'http://fcbayern.com.br/images/team-logos/bayern-munchen-logo.png', descricao:'blba balsadsad asd asdsa dasdasdas', industria: 'esporte', fundacao:2016, encerramento: '2016-01-01', timestamp:'2016-01-01', historia:'fdsfsd fdsf dsfsdfsdf', cidade:'São Paulo', id_usuario:1, curtidas:10},
				{_id:1, nome:'Startup AB', imagem:'http://fcbayern.com.br/images/team-logos/bayern-munchen-logo.png', descricao:'blba balsadsad asd asdsa dasdasdas', industria: 'esporte', fundacao:2016, encerramento: '2016-01-01', timestamp:'2016-01-01', historia:'fdsfsd fdsf dsfsdfsdf', cidade:'São Paulo', id_usuario:1, curtidas:10},
				{_id:2, nome:'Startup ABC', imagem:'http://fcbayern.com.br/images/team-logos/bayern-munchen-logo.png', descricao:'blba balsadsad asd asdsa dasdasdas', industria: 'esporte', fundacao:2016, encerramento: '2016-01-01', timestamp:'2016-01-01', historia:'fdsfsd fdsf dsfsdfsdf', cidade:'São Paulo', id_usuario:1, curtidas:10}
			];*/

			$scope.openInvestModal = function () {
              var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'invest.html',
                controller: 'InvestCtrl',
                resolve: {
                  items: function () {
                    return '';
                  }
                }
              });
            };
		})
		.controller('InvestCtrl', function ($scope, $uibModalInstance, items) {
            $scope.loginInfo = { login:'', senha:''};
            $scope.Confirm = function () {

              //LoginService.login().then(function (response) {$scope.startupList = response.data; });
              $uibModalInstance.close('');
            };

            $scope.Cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
        });
})();
