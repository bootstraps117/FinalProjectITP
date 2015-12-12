//Key: bqhr8vy7jwcp5bc64ju9tauaukwgj4kg

angular
	.module('esports', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/templates/home_template.html',
			controller: 'HomePageController',
			controllerAs: 'vm'
		})
		.when('/ladders', {
			templateUrl: '/templates/ladders_template.html',
			controller: 'LaddersController',
			controllerAs: 'vm',
			resolve: {
				ladders: function(getLadders){
					return getLadders.searchLadders();
				}
			}
		})
		.when('/ladders/:region/profile/:id/:realm/:name', {
			templateUrl: '/templates/player_template.html',
			controller: 'PlayerController',
			controllerAs: 'vm',
			resolve:{
				player: function(getPlayer, $route, $location){
					var region = $route.current.params.region;
					var playerID = $route.current.params.id;
					var playerName = $route.current.params.name;
					var realm = $route.current.params.realm;

					return getPlayer.searchPlayer(playerID, region, playerName, realm);
				}
			}
		})
		.when('/youtube', {
			templateUrl: '/templates/youtube_template.html',
			controller: 'YouTubeController',
			controllerAs: 'vm',
			resolve:{
				videos: function(getYouTube){
					return getYouTube.search();
				}
			}
		})
		.when('/events', {
			templateUrl: '/templates/events_template.html',
			controller: 'EventsController',
			controllerAs: 'vm',
			resolve:{
				events: function(getEvents){
					return getEvents.searchEvents();
				}
			}
		})
		.otherwise({
			redirectTo: '/'
		});
	});