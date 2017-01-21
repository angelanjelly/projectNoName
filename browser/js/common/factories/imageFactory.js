app.factory('ImageFactory', function($http) {

    return {
        submit: function(image) {
            var imageUrl = image.url + '';
            // predict the contents of an image by passing in a url
            return $http.get('/api/images/clarifai', { imageUrl: imageUrl })
            .then(function (response) {
                console.log('this is the response', response.data);
                return response.data;
            });
        }
    };

});

