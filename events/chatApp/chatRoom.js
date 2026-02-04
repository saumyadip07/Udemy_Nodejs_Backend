const EventEmitter = require("events");

class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }

  join(user) {
    this.users.add(user);
    this.emit("join", user);
  }

  leave(user) {
    this.users.delete(user);
    this.emit("leave", user);
  }
  sendMessage(user, message) {
    if (this.users.has(user)) {
      this.emit("message", { user, message });
    }
    else {
      this.emit("error", user, new Error(`${user} not in chat room`));
    }
  }
}

module.exports = ChatRoom;
