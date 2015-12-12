angular
	.module('esports')
	.factory('plotEvent', function(){
		return{
			plot: function(event, map){
				var eventLocation = new google.maps.LatLng(event.latitude, event.longitude);

				var marker = new google.maps.Marker({
					map: map,
					position: eventLocation,
					animation: google.maps.Animation.DROP
				});

				var infowindow = new google.maps.InfoWindow({
					content: event.venue_name
				});

				marker.addListener('click', function(){
					infowindow.open(map, marker);
				});
			}

		};
	});