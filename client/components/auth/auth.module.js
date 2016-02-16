'use strict';

angular.module('thesisApp.auth', [
  'thesisApp.constants',
  'thesisApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
