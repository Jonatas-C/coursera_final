(function() {
	
	'use strict';
	
	angular
		.module('app.meet', [])
		.config(config);
	
	/** @ngInject */
    function config($stateProvider) {
        
        $stateProvider

        .state('app.meet', {
            url: '/meet',
            views: {
                'content@app': {
                    templateUrl: 'app/meet/meet.html',
                    controller: 'MeetController as vm'
                }
            }
        });
    }
})();