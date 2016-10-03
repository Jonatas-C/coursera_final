(function() {

    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($scope) {

        var vm = this;


        $scope.main = {};
        $scope.main.login = {};
        $scope.main.login.userId = "";
        $scope.main.login.id = "";
        
    }

})();
