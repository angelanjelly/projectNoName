app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html'
    });
});

app.controller('MainController', function($state, $scope, $log, $window, $timeout, $http) {
	$scope.dataFromClarifai = null;
	$scope.showImage = function() {
		if ($scope.image.url) return true;
		return false;
	}

	$scope.submit = function(image) {
        var imageUrl = image.url + '';
        // predict the contents of an image by passing in a url
        return $http.post('/api/images/clarifai', { imageUrl: imageUrl })
        .then(function (response) {
            $scope.image.url = image.url;
            $scope.dataFromClarifai = response.data;
            return response.data;
        });
    }
});

