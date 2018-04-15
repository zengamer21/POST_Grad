'use strict';

// Register `itHome` component, along with its associated controller and template
angular.
module('itHome').
component('itHome', {
    templateUrl: 'components/it-home/it-home.template.html',
    controller: ['$routeParams', '$location',
        function ItHomeCtrl($routeParams, $location) {
            var self = this;

            self.viewProgramsOfStudy = function() {
                $location.path("/components/search");
            };

            self.importSpreadsheet = function() {
                $location.path("/components/import-spreadsheet");
            };
        }
    ]
});