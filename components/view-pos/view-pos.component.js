'use strict';

// Register `viewPos` component, along with its associated controller and template
angular.
module('viewPos').
component('viewPos', {
    templateUrl: 'components/view-pos/view-pos.template.html',
    controller: ['$routeParams', '$http',
        function ViewPosCtrl($routeParams, $http) {
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