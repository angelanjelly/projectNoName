app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html'
    });
});

app.controller('MainController', function($state, $scope, $log, $window, $timeout, MapFactory) {
	$scope.markers = $window.markers;
	$scope.deleteAMarker = MapFactory.deleteAMarker;

	$scope.deleteAllMarkers = function() {
		$window.days.forEach(function (day) {
			day.forEach(function(marker) {
				marker.setMap(null);
			});
		});
	};

	(function update() {
		$timeout(update, 1);
		$scope.markers = $window.markers;
		$scope.days = $window.days;
	}());

});

