(function() {

    'use strict';


    angular
        .module('app.topbar')
        .factory('LoginService', function ($q, $http) {
    		    return {
    		        login: function (login, senha) {
                      return $http.post('http://localhost:3000/api/usuarios/login',
                        
                        { 'username' : login, 'password': senha }
                        );
                  },
                get: function (id) {

                       var deferred = $q.defer(),

                       //httpPromise = $http.get('http://localhost:3000/api/usuarios/57c8032ba8af941f4c759dfe');
                       
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
                }                
    		    };

    		})
        .factory('RegisterService', function ($http) {
            return {
                register: function (name, interest, position, city, email, username, password) {

 
                  var result = $http({
                          url: 'http://localhost:3000/api/usuarios',
                          method: "POST",
                          data: {'name':name, 'interest': interest, 'position': position, 'city': city, 'email': email, 'username': username, 'password': password }
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
        .controller('TopbarController', function($scope, $uibModal, LoginService){

          $scope.main = {};
          $scope.main.login = {};
          $scope.main.login.userId = "";
          $scope.main.login.id = "";

          $scope.Logout = function()
          {
            $scope.main.login = {};
          };

          $scope.openLoginModal = function () {
              var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'login.html',
                controller: 'LoginCtrl',
                resolve: {
                  items: function () {
                    return '';
                  }
                }
              });
            };

            $scope.openRegisterModal = function () {
                var modalInstance = $uibModal.open({
                  animation: true,
                  ariaLabelledBy: 'modal-title',
                  ariaDescribedBy: 'modal-body',
                  templateUrl: 'register.html',
                  controller: 'RegisterCtrl',
                  resolve: {
                    items: function () {
                      return '';
                    }
                  }
                });
              };

      })
        .controller('LoginCtrl', function ($scope, $uibModalInstance, LoginService, $rootScope) {
            $scope.main = {};
            $scope.main.login = {};
            $scope.main.login.userId = "";
            $scope.main.login.id = "";
            $scope.main.login.name = "";


            $scope.loginInfo = { login:'', senha:''};
            $scope.Login = function () {

              
              LoginService.login($scope.loginInfo.login, $scope.loginInfo.senha)
                .success(function(data){
                  
                  LoginService.get(data.userId).then(function (response) {
                      $scope.main.login.userId = data.userId;
                      $scope.main.login.id = data.id;
                      $scope.main.login.name = response.data.name; 
                      console.log(response.data.name);
                      console.log(data.id);
                      console.log(data.userId);
                  });
                })
                .error(function(err){
                  console.log(err);
                });
              

              $uibModalInstance.close('');
            };

            $scope.Cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
        })
        .controller('RegisterCtrl', function ($scope, $uibModalInstance, RegisterService) {
          $scope.registerInfo = {name:'', interest:'', position:'', city:'', email:'', username:'', password:''};
          

            $scope.Register = function () {
              var result = RegisterService.register($scope.registerInfo.name, $scope.registerInfo.interest, $scope.registerInfo.position, $scope.registerInfo.city, $scope.registerInfo.email, $scope.registerInfo.username, $scope.registerInfo.password);
              console.log(result);
              $uibModalInstance.close('');
            };

            $scope.Cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
        });


})();
