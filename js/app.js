var app = angular.module('chatApp', ['firebase', 'ngRoute']);



app.config(function($routeProvider){

	$routeProvider
		.when('/chatrooms', {
			templateUrl: 'js/chat/chats.html',
			controller: 'chatsCtrl'
		})
		.when('/chatrooms/:chatroomId', {
			templateUrl: 'js/chat/chat.html',
			controller: 'chatCtrl',
			resolve: {
				chatroom: function(chatService,$route){
					return chatService.getChatRoom($route.current.params.chatroomId);
				}
			}
		})
		.otherwise({
			redirectTo: '/chatrooms'
		});
});
