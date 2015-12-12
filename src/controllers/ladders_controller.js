angular
	.module('esports')
	.controller('LaddersController', function(ladders){
		var vm = this;

		vm.ladders = ladders;

		vm.naLadder = ladders[0];
		vm.euLadder = ladders[1];
		vm.krLadder = ladders[2];

		
	});