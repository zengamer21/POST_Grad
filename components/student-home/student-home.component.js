'use strict';

// Register `studentHome` component, along with its associated controller and template
angular.
module('studentHome').
component('studentHome', {
    templateUrl: 'components/student-home/student-home.template.html',
    controller: ['$routeParams', '$location', 'DataService',
        function StudentHomeCtrl($routeParams, $location, DataService) {
            var self = this;

            self.currentUser = DataService.firstName + " " + DataService.lastName;

            self.logOut = function(){
                DataService.firstName = "";
                DataService.lastName = "";
                DataService.userID = "";
                DataService.role = "";

                $location.path("/components/login");
            };

            self.updateContactInfo = function() {
                $location.path("/components/contact-info");
            };

            self.viewPos = function() {
                $location.path("/components/view-pos");
            };
        }
    ]
});