angular
	.module('esports')
	.factory('getPlayer', function($http, $location){
		return {
			searchPlayer: function(playerID, region, playerName, realm){
				var apiKey = 'bqhr8vy7jwcp5bc64ju9tauaukwgj4kg';
				var playerUrl;

					if(region === 'en_US'){
						playerUrl = 'https://' + region + '.api.battle.net/sc2/profile/' + playerID + '/' + realm + '/' + playerName + '/ladders?locale=en_US&apikey=' + apiKey + '&callback=JSON_CALLBACK';
					}
					else if(region === 'en_GB'){
						playerUrl = 'https://' + region + '.api.battle.net/sc2/profile/' + playerID + '/' + realm + '/' + playerName + '/ladders?locale=en_GB&apikey=' + apiKey + '&callback=JSON_CALLBACK';
					}
					else{
						playerUrl= 'https://' + region + '.api.battle.net/sc2/profile/' + playerID + '/' + realm + '/' + playerName + '/ladders?locale=ko_KR&apikey=' + apiKey + '&callback=JSON_CALLBACK';
					}

					return $http.jsonp(playerUrl).then(function(response){
						console.log(response.data.currentSeason);
						return response.data.currentSeason;
					}, function(){
						$location.path('/ladders');
					});
			}
		};
	});