(function() {

    'use strict';

    angular
        .module('rin', [

            // Core
            'app.core',

            // Navigation
            'app.sidebar',
            'app.topbar',

            // Views
            'app.login',
            'app.register',
            'app.home',
            'app.components',
            'app.share',
            'app.leverage',
            'app.meet',
            'app.discover',
            'app.discoverdetail',
            'app.meetdetail',
            'app.account'


        ]);
})();
