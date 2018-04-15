'use strict';

angular.
module('postGradApp').
    config(['$locationProvider' ,'$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

         $routeProvider.
         when('/components/login', {
            template: '<login></login>'
         }).
         when('/components/faculty-home', {
             template: '<faculty-home></faculty-home>'
         }).
         when('/components/student-home', {
             template: '<student-home></student-home>'
         }).
         when('/components/it-home', {
             template: '<it-home></it-home>'
         }).
         when('/components/search', {
             template: '<search></search>'
         }).
         when('/components/search-results', {
             template: '<search-results></search-results>'
         }).
         when('/components/faculty-view-all', {
             template: '<faculty-view-all></faculty-view-all>'
         }).
         when('/components/view-pos', {
             template: '<view-pos></view-pos>'
         }).
         when('/components/contact-info', {
             template: '<contact-info></contact-info>'
         }).
         when('/components/import-spreadsheet', {
             template: '<import-spreadsheet></import-spreadsheet>'
         }).
        otherwise('/components/login');
    }
]);
