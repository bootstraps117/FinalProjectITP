angular
	.module('esports')
		.directive('youtubeVideo', function(){
			return{
				restrict: 'E',
				templateUrl: '/templates/directives/youtube-video.html',
				scope: {
					video: '='
				},
			};
		});