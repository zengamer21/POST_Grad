'use strict';

// Register `facultyHome` component, along with its associated controller and template
angular.
module('searchResults').
component('searchResults', {
    templateUrl: 'components/search-results/search-results.template.html',
    controller: ['$scope', '$routeParams', '$http', 'DataService',
        function SearchResultsCtrl($scope, $routeParams, $http, DataService) {
            var self = this;

            var results = $scope.results;
        }
    ]
});