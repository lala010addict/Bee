'use strict';

angular.module('beeApp.auth', [
  'beeApp.constants',
  'beeApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
