'use strict';

// Register `login` component, along with its associated controller and template
angular.
module('login').
    component('login', {
        templateUrl: 'components/login/login.template.html',
        controller: ['$routeParams', '$http', '$location', 'DataService',
            function LoginCtrl($routeParams, $http, $location, DataService) {

                var self = this;
                var username;

                self.authenticate = function () {
                    $http.post("ajax/authenticateUser.php?chargerid="+self.username)
                        .success(function(data){

                            if(data.length == 0){
                                alert("Username not found!");
                            }
                            else{
                                // switch on role that is returned from the query
                                switch(data[0].role.toLowerCase()) {
                                    case "faculty":
                                        DataService.role = "faculty";
                                        $location.path("/components/faculty-home");
                                        break;
                                    case "student":
                                        DataService.role = "faculty";
                                        $location.path("/components/student-home");
                                        break;
                                    case "staff":
                                        DataService.role = "staff";
                                        $location.path("/components/it-home");
                                        break;
                                    case "admin":
                                        DataService.role = "admin";
                                        $location.path("/components/it-home");
                                        break;
                                    default:
                                        alert("Username not found!");
                                }

                                // store ID so we can easily query for this user again later
                                DataService.userID = data[0].id;
                            }
                         })
                        .error(function(data){
                            alert("Username not found!");
                        });
                };
            }
        ]
    });