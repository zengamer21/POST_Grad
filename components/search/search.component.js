'use strict';

// Register `search` component, along with its associated controller and template
angular.
module('search').
component('search', {
    templateUrl: 'components/search/search.template.html',
    controller: ['$scope', '$routeParams', '$http', '$location', 'DataService',
        function SearchCtrl($scope, $routeParams, $http, $location, DataService) {
            var self = this;
            var searchValue = "";
            var searchType = "";
            var results = "";

            self.search = function(){

                if(self.searchType == "last_name"){
                    $http.post("ajax/searchByLastName.php?last_name="+self.searchValue)
                        .success(function(data){
                            if(data.length == 0) {
                                alert("No students found by that name!")
                            }
                            else{
                                self.results = data;
                                // $location.path("/components/search-results");
                            }
                        })
                        .error(function(data){
                            alert("Error while searching!");
                        });
                }
                else{
                    $http.post("ajax/searchByChargerID.php?charger_id="+self.searchValue)
                        .success(function(data){
                            if(data.length == 0) {
                                alert("No students found by that chargerID!")
                            }
                            else{
                                self.results = data;
                                // $location.path("/components/search-results");
                            }
                        })
                        .error(function(data){
                            alert("Error while searching!");
                        });
                }

            }

        }
    ]
});