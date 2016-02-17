'use strict';
$(document).foundation();

angular.module('beeApp', [
  'beeApp.auth',
  'beeApp.admin',
  'beeApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });


    // <script src="bower_components/foundation-sites/dist/foundation.min.js"></script>
    // <link rel="stylesheet" href="bower_components/foundation-sites/dist/foundation.min.css">
    // <link rel="stylesheet" href="bower_components/foundation-sites/dist/foundation-flex.min.css">