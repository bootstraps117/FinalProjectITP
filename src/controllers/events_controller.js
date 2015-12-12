angular
	.module('esports')
	.controller('EventsController', function(events){
		vm = this;

		vm.events = events;

		console.log(events);
	});