(function() {
	
	'use strict';
	
	angular
		.module('app.share', [])
		.config(config);
	
	/** @ngInject */
    function config($stateProvider) {
        
        $stateProvider

        .state('app.share', {
            url: '/share',
            views: {
                'content@app': {
                    templateUrl: 'app/share/share.html',
                    controller: 'ShareController as vm'
                }
            }
        });
    }
})();