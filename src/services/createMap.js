angular
	.module('esports')
	.factory('createMap', function(plotPoint){
		return{
			map: function(events){
				var center = new google.maps.LatLng(30.141198, -38.787720);

				var map = new google.maps.Map(document.getElementById('map-canvas'), {
					center: center,
					zoom: 3
				});

					events.forEach(function(event){
						return plotEvent.plot(event, map);
					});

			}
		};
	});