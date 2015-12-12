angular
	.module('esports')
	.controller('PlayerController', function(player){
		vm = this;
		vm.player = player;

		vm.playerMain = player[0].characters[0];
		vm.ladderMain = player[0].ladder[0];
	});