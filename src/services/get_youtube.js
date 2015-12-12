angular
	.module('esports')
	.factory('getYouTube', function($http){
		return{
			search: function(){

				var apiKey = 'AIzaSyBsKIX6OtcbO1GzFBq45zqO59MuBgDA_bw';
				var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + apiKey + '&q=star+craft+2+legacy+void&maxResults=25';

				return $http.get(url).then(function(response){
					console.log(response.data.items);
						return response.data.items;
				});
			}
		};
	});