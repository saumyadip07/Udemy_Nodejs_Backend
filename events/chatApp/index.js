const ChatRoom = require('./chatRoom');

const chatRoom = new ChatRoom();


//event listeners

chatRoom.on('join', (user) => {
  console.log(`${user} has joined the chat room.`);
});


chatRoom.on('leave', (user) => {
  console.log(`${user} has left the chat room.`);
});

chatRoom.on('message', ({ user, message }) => {
  console.log(`${user}: ${message}`);
});
chatRoom.on('error', (user,error) => {
  console.error(`Error:  - ${error.message}`);
});



// Simulate chat room activity (Frontend interactions would trigger these in a real app

chatRoom.join('Alice');
chatRoom.join('Bob');
chatRoom.sendMessage('Alice', 'Hello, everyone!');
chatRoom.sendMessage('Bob', 'Hi, Alice!');
chatRoom.leave('Alice');  
chatRoom.sendMessage('Alice', 'Goodbye!'); // This will trigger an error event
chatRoom.leave('Bob');