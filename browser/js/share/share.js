app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('share', {
        url: '/share',
        controller: 'ShareController',
        templateUrl: 'js/share/share.html'
    });

});

app.controller('ShareController', function ($scope) {

});
