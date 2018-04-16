'use strict';

// Register `managePrivileges` component, along with its associated controller and template
angular.
module('managePrivileges').
component('managePrivileges', {
    templateUrl: 'components/manage-privileges/manage-privileges.template.html',
    controller: ['$routeParams', '$http', 'DataService',
        function ManagePrivilegesCtrl($routeParams, $http, DataService) {
            var self = this;

            self.currentUser = "Iron Man";

            self.update = function(){
                // TODO: write a script to input the role into the DB
            };
        }
    ]
});