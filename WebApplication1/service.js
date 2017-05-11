var app = angular.module('baapApp');


app.factory('PainterServices', ['$http', function ($http) {
    return {
        getPainterObject: function () {
            var value = {
                "firstName": "Siddhant",
                "lastName": "Painter"
            }
            return value;
        }
    };
}]);

app.factory('DataServices', ['$http', function ($http) {
    return {

        getDataFromView: function (val) {
            console.log(val);
        }
    };

}]);