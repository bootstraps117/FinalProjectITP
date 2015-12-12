angular
	.module('esports')
	.controller('YouTubeController', function(videos){
		vm = this;

		vm.videos = videos;
	});