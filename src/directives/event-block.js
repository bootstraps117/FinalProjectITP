angular
	.module('esports')
	.directive('eventBlock', function(){
		return {
			restrict: 'E',
			templateUrl: '/templates/directives/event-block.html',
			scope: {
				event: '='
			},
		};
	});