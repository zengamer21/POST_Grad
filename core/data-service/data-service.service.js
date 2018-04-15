'use strict';

angular.
module('core.dataService').
factory('DataService', [
    function() {
        const sessionData = {};
        sessionData.test = "Hola, senor!";
        return sessionData;

    }
]);
