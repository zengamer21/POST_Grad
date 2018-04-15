'use strict';

// Register `facultyHome` component, along with its associated controller and template
angular.
module('outline').
component('outline', {
    templateUrl: 'components/outline/outline.template.html',
    controller: ['$routeParams', '$http', '$location',
        function OutlineCtrl($routeParams, $http, $location) {
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