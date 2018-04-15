'use strict';

// Register `login` component, along with its associated controller and template
angular.
module('login').
    component('login', {
        templateUrl: 'components/login/login.template.html',
        controller: ['$routeParams', '$http', '$location',
            function LoginCtrl($routeParams, $http, $location) {

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
                                        $location.path("/components/faculty-home");
                                        break;
                                    case "student":
                                        $location.path("/components/student-home");
                                        break;
                                    case "staff":
                                        $location.path("/components/it-home");
                                        break;
                                    case "admin":
                                        $location.path("/components/it-home");
                                        break;
                                    default:
                                        alert("Username not found!");
                                }
                            }
                         })
                        .error(function(data){
                            alert("Username not found!");
                        });
                };
            }
        ]
    });