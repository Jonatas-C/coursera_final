(function() {

	'use strict';

	angular
		.module('app.leverage', [])
		.config(config);

	/** @ngInject */
    function config($stateProvider) {

        $stateProvider

        .state('app.leverage', {
            url: '/leverage',
            views: {
                'content@app': {
                    templateUrl: 'app/leverage/leverage.html',
                    controller: 'LeverageController'
                }
            }
        });
    }
})();
