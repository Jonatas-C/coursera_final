(function() {

    'use strict';

    angular
        .module('app.modal')
        .controller('ModalController', function ($uibModal, $log) {
            var $ctrl = this;
            $ctrl.items = ['item1', 'item2', 'item3'];

            $ctrl.animationsEnabled = true;

            $ctrl.open = function (size) {
              var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'modal.html',
                controller: 'ModalController',
                controllerAs: '$ctrl',
                size: size,
                resolve: {
                  items: function () {
                    return $ctrl.items;
                  }
                }
              });

              modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
              }, function () {
                $log.info('Modal dismissed at: ' + new Date());
              });
            };

            $ctrl.openComponentModal = function () {
              var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                component: 'modalComponent',
                resolve: {
                  items: function () {
                    return $ctrl.items;
                  }
                }
              });

              modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
              }, function () {
                $log.info('modal-component dismissed at: ' + new Date());
              });
            };

            $ctrl.toggleAnimation = function () {
              $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
            };
      
  });
})();


