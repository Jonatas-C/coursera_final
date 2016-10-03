(function() {
	
	'use strict';
	
	angular
		.module('app.modal', [])
		.config(config);
	
	/** @ngInject */
    function config($stateProvider) {
        
        $stateProvider

        .state('app.modal', {
            url: '/modal',
            views: {
                'content@app': {
                    templateUrl: 'app/modal/modal.html',
                    controller: 'ModalController as vm'
                }
            }
        });
    }
})();