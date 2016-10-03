(function() {

	'use strict';

	angular
		.module('app.meetdetail', [])
		.config(config);

	/** @ngInject */
    function config($stateProvider) {

        $stateProvider

        .state('app.meetdetail', {
            url: '/meetdetail/:id',
            views: {
                'content@app': {
                    templateUrl: 'app/meetdetail/meetdetail.html',
                    controller: 'MeetDetailController'
                }
            }
        });
    }
})();
