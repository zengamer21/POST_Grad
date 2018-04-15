'use strict';

// Register `ocntactInfo` component, along with its associated controller and template
angular.
module('contactInfo').
component('contactInfo', {
    templateUrl: 'components/contact-info/contact-info.template.html',
    controller: ['$routeParams', '$location',
        function ContactInfoCtrl($routeParams, $location) {
            var self = this;

            // self.goToSearch = function() {
            //     $location.path("/components/search");
            // };
            //
            // self.goToViewAll = function() {
            //     $location.path("/components/faculty-view-all");
            // };
        }
    ]
});