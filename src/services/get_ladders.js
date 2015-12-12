angular
	.module('esports')
	.factory('getLadders', function($http, $q){
		return{
			searchLadders: function(){
				var apiKey = 'bqhr8vy7jwcp5bc64ju9tauaukwgj4kg';

				var naLadderID = 190001;
				var naUrl = 'https://us.api.battle.net/sc2/ladder/' + naLadderID + '?locale=en_US&apikey=' + apiKey + '&callback=JSON_CALLBACK';

				var euLadderID = 176680;
				var euUrl = 'https://eu.api.battle.net/sc2/ladder/' + euLadderID + '?locale=en_GB&apikey=' + apiKey + '&callback=JSON_CALLBACK';

				var krLadderID = 59141;
				var krUrl = 'https://kr.api.battle.net/sc2/ladder/' + krLadderID + '?locale=ko_KR&apikey=' + apiKey + '&callback=JSON_CALLBACK';

				var naLadder = $http.jsonp(naUrl);
				var euLadder = $http.jsonp(euUrl);
				var krLadder = $http.jsonp(krUrl);

				return $q.all([naLadder, euLadder, krLadder]).then(function(responseArray){
					var ladderMembers = [];

					console.log(responseArray);

					responseArray.forEach(function(response){
						ladderMembers.push(response.data.ladderMembers);
					});

					return ladderMembers;
				});
			}
		};
	});