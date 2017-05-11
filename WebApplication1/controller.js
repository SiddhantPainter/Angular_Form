var app = angular.module('baapApp');

app.controller('baapCtrl', ['$scope', '$http', '$state', 'PainterServices', 'DataServices', function ($scope, $http, $state, PainterServices, DataServices) {
    $http.defaults.headers.post["Content-Type"] = "application/json";
    $scope.user = PainterServices.getPainterObject();
        /*console.log("I am inside Controller:");
      console.log(response.data.saareUser);
      $scope.firstName = response.data.firstName;
      $scope.lastName = response.data.lastName;
    });*/
    console.log("I am inside Controller:");
    console.log($scope.user);

    $scope.output = function() {
        DataServices.getDataFromView($scope.outputVariable);
    };

    $scope.regEx = "/^[0-9]{10,10}$/";

    $scope.formUser = {
        firstName: '',
        lastName: '',
        address: {
            street: '',
            city: '',
            state: '',
            postalCode: '',
            country: ''
        },
        email: '',
        phoneNumber: ''
    };

    function isUndefined(_val) {
        if (_val == undefined || _val.trim() == "" || _val == null || _val == "Invalid Date") {
            return true;
        }
        else {
            return true;
        }
    }

    $scope.submitForm = function () {
        console.log($scope.formUser);
        if (isUndefined($scope.formUser.firstName) && isUndefined($scope.formUser.lastName) && isUndefined($scope.formUser.address.postalCode) && isUndefined($scope.formUser.email) && isUndefined($scope.formUser.phoneNumber)) {
            alert('Form is not submitted');
        }
        else{
            alert('Form submitted');
            console.log($scope.formUser);
        }
   
    }
    
    $scope.$watch('userForm.firstName.$dirty', function () {
        console.log('form model changed');
    }, true);
}]);