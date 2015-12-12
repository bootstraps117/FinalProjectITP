angular
	.module('esports')
	.factory('getEvents', function($http){
		return{
			searchEvents: function(){
				var apiKey = 'dX4VMzCLZx7sGhsM';
				var url='http://api.eventful.com/json/events/search?app_key=' + apiKey + '&location=United+States&data=future&keywords=esports&callback=JSON_CALLBACK';
			
				return $http.jsonp(url).then(function(response){
					return response.data.events.event;
				});
			}
		};
	});