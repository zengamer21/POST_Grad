'use strict';

// Register `facultyViewAll` component, along with its associated controller and template
angular.
module('facultyViewAll').
component('facultyViewAll', {
    templateUrl: 'components/faculty-view-all/faculty-view-all.template.html',
    controller: ['$routeParams', '$http',
        function FacultyViewAllCtrl($routeParams, $http) {
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