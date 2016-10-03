(function() {
	
	'use strict';
	
	angular
		.module('app.account')
 		.controller("TabsParentController", function ($scope) {
 
			    var setAllInactive = function() {
			        angular.forEach($scope.workspaces, function(workspace) {
			            workspace.active = false;
			        });
			    };
 
			    $scope.workspaces =
			    [
			        { id: 1, name: "Workspace 1", active:true  },
			        { id: 2, name: "Workspace 2", active:false }
			    ];
			 	         
		});

})();