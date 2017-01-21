app.factory('MapFactory', function() {

	return {
		deleteAMarker: function (marker) {
			markers.forEach(function (item, index, object) {
				if (item.title === marker.title) {
					object.splice(index, 1);
					marker.setMap(null);
				}
			});
		}
	}
});
