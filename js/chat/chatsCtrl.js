var app = angular.module('chatApp');

app.controller('chatsCtrl', function($scope, chatService, $location){
	
	$scope.chatRooms = chatService.getChatRooms().$asArray();

	$scope.addRoom = function(){
		$scope.chatRooms.$add($scope.room);
	}

	$scope.joinRoom= function(room){
		$location.path('chatrooms/' + room.$id);
	}
});