(function() {

	'use strict';

	angular
		.module('app.discover')
		.factory('DiscoverService', function ($q, $http) {
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
		.controller('DiscoverController', function($scope,DiscoverService ){
			DiscoverService.get().then(function (response) {$scope.startupList = response.data;});
	});
})();
