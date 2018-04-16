'use strict';

// Register `ocntactInfo` component, along with its associated controller and template
angular.
module('contactInfo').
component('contactInfo', {
    templateUrl: 'components/contact-info/contact-info.template.html',
    controller: ['$routeParams', '$http', '$location', 'DataService',
        function ContactInfoCtrl($routeParams, $http,$location, DataService) {
            var self = this;
            self.userID = DataService.userID;
            self.firstName = "";
            self.middleName = "";
            self.lastName = "";
            self.street = "";
            self.city = "";
            self.state = "";
            self.zip = "";
            self.phone = "";
            self.email = "";

            $http.post("ajax/getContactInfo.php?userid="+self.userID)
                .success(function(data){

                    if(data.length == 0){
                        alert("Problem finding contact info!");
                    }
                    else{
                        // alls good, lets keep crackin
                        self.firstName = data[0].first_name;
                        self.middleName = data[0].middle_name;
                        self.lastName = data[0].last_name;
                        self.street = data[0].address_street;
                        self.city = data[0].address_city;
                        self.state = data[0].address_state;
                        self.zip = data[0].address_zip;
                        self.phone = data[0].phone;
                        self.email = data[0].email;
                    }
                })
                .error(function(data){
                    alert("Problem finding contact info!");
                });

            self.saveToDB = function(){
                $http.post("ajax/updateContactInfo.php?userid="+self.userID+"&firstName="+self.firstName+"&middleName="+self.middleName+"&lastName="+self.lastName+"&addressStreet="+self.street+"&addressCity="+self.city+"&addressState="+self.state+"&addressZip="+self.zip+"&phone="+self.phone+"&email="+self.email)
                    .success(function(data){
                        if(data.length == 0){
                            alert("Problem updating contact info!");
                        }
                        else{
                            alert("Successfully updated!");
                        }
                    })
                    .error(function(data){
                        alert("Problem finding contact info!");
                    });
            }
        }
    ]
});