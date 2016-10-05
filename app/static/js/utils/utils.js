module.exports = {
	getLocation : function (callback) {
		function showPosition(position) {
			let location = {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude
			}
			return callback(location)
		}
		function showError(error) {
			console.log(error)
		}

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		} else {
			alert('Geolocation is not supported by this browser.');
		}
	}
}