app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html'
    });
});

app.controller('MainController', function($state, $scope, $log, $window, $timeout, MapFactory) {

});

