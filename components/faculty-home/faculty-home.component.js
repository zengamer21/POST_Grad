'use strict';

// Register `facultyHome` component, along with its associated controller and template
angular.
module('facultyHome').
component('facultyHome', {
    templateUrl: 'components/faculty-home/faculty-home.template.html',
    controller: ['$routeParams', '$location',
        function FacultyHomeCtrl($routeParams, $location) {
            var self = this;

            self.goToSearch = function() {
                $location.path("/components/search");
            };

            self.goToViewAll = function() {
                $location.path("/components/faculty-view-all");
            };
        }
    ]
});