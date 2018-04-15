'use strict';

// Register `managePrivileges` component, along with its associated controller and template
angular.
module('managePrivileges').
component('managePrivileges', {
    templateUrl: 'components/manage-privileges/manage-privileges.template.html',
    controller: ['$routeParams', '$http',
        function ManagePrivilegesCtrl($routeParams, $http) {
            // var self = this;
            // self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            //     self.setImage(phone.images[0]);
            // });
            //
            // self.setImage = function setImage(imageUrl) {
            //     self.mainImageUrl = imageUrl;
            // };
        }
    ]
});