'use strict';

// Register `importSpreadsheet` component, along with its associated controller and template
angular.
module('importSpreadsheet').
component('importSpreadsheet', {
    templateUrl: 'components/import-spreadsheet/import-spreadsheet.template.html',
    controller: ['$routeParams', '$http',
        function ImportSpreadsheetCtrl($routeParams, $http) {
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