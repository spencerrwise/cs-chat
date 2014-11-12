var app = angular.module('chatApp');

app.factory('chatService', function ($firebase) {
	var firebaseUrl = 'https://cancer-spot.firebaseio.com';

	return {
		getChatRooms: function(){
			return $firebase(new Firebase(firebaseUrl + '/chatrooms'));
		},
		getChatRoom: function(chatRoomId){
			return $firebase(new Firebase(firebaseUrl + '/chatrooms/' + chatRoomId + '/messages'));	
		}
	}
})



/* chatroom: {
	chats: [{text: 'what you typed in', by: username, timestamp: new Date().toISOString()}]
}
*/