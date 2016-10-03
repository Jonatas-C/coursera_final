(function() {

	'use strict';

	angular
		.module('app.discover', [])
		.config(config);

	/** @ngInject */
    function config($stateProvider) {

        $stateProvider

        .state('app.discover', {
            url: '/discover/',
            views: {
                'content@app': {
                    templateUrl: 'app/discover/discover.html',
                    controller: 'DiscoverController'
                }
            }
        });
    }
})();
