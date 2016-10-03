(function() {
	
	'use strict';
	
	angular
		.module('app.account', [])
		.config(config);
	
	/** @ngInject */
    function config($stateProvider) {
        
        $stateProvider

        .state('app.account', {
            url: '/account',
            views: {
                'content@app': {
                    templateUrl: 'app/account/account.html',
                    controller: 'AccountController as vm'
                }
            }
        });
    }
})();