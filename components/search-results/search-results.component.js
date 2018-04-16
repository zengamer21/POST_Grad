'use strict';

// Register `facultyHome` component, along with its associated controller and template
angular.
module('searchResults').
component('searchResults', {
    templateUrl: 'components/search-results/search-results.template.html',
    controller: ['$scope', '$routeParams', '$http', '$location', 'DataService',
        function SearchResultsCtrl($scope, $routeParams, $http, $location, DataService) {
            var self = this;

            self.results = DataService.searchResults;

            self.viewPos = function(){
                $location.path("/components/view-pos")
            };

            self.managePrivileges = function(){
                $location.path("/components/manage-privileges")
            };
        }
    ]
});