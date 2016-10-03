(function() {

	'use strict';

	angular
		.module('app.discoverdetail', [])
		.config(config);

	/** @ngInject */
    function config($stateProvider) {

        $stateProvider

        .state('app.discoverdetail', {
            url: '/discoverdetail/:id',
            views: {
                'content@app': {
                    templateUrl: 'app/discoverdetail/discoverdetail.html',
                    controller: 'DiscoverDetailController'
                }
            }
        });
    }
})();
