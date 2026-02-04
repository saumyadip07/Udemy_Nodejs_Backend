const EventEmitter = require('events');


class myEvent extends EventEmitter { 

  sendMessgae(msg) {
    console.log(`Message: ${msg}`);
    // emitting event
    this.emit("messageSent", msg);
   }
}

const chat = new myEvent();

//event listener
chat.on("messageSent", (msg) => {
  console.log(`Listener received message: ${msg}`);
});



chat.sendMessgae("Hello World!");