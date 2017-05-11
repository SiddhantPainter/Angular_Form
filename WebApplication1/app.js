var app = angular.module('baapApp', ['ui.router']);

app.config(function ($stateProvider) {
    $stateProvider
    .state("view", {
        url: '/view',
        controller: 'baapCtrl',
        templateUrl: '/view.html'
    });
});