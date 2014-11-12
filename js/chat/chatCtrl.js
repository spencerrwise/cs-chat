var app = angular.module('chatApp');

app.controller('chatCtrl', function($scope, chatroom){

    $scope.chatroom = chatroom.$asArray()

        var side = 'left'

            // Messages, client info & sending
            
            $scope.sendMessage = function () {
                if(side === 'left'){
                    side = 'right';
                } else {
                    side = 'left';
                }
                $scope.chatroom.$add({text: $scope.messageText, side: side});
                $scope.messageText = "";
            };


            




            // if(side === 'right'){
            //     $('.bubble').css("background", "rgba(45, 234, 21, 0.9)");
            // }



            // Occurs when we receive chat messages
            // server.ngChatMessagesInform = function (p) {
            //     $scope.messages.push({
            //         avatar: "data:image/png;base64," + p.avatar.toBase64(),
            //         text: p.message,
            //         side: side
            //     });
            //     $scope.$apply();

            //     // Animate
            //     $("#viewport-content").animate({
            //         bottom: $("#viewport-content").height() - $("#viewport").height()
            //     }, 250);

            //     // flip the side
            //     side = side == 'left' ? 'right' : 'left';
            // };

            // // Once connected, we need to join the chat
            // server.onConnect(function () {
            //     server.joinNgChat();
            // });
        

});