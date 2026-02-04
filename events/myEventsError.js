const  EventEmitter  = require("events");

const myEmitter = new EventEmitter();

// console.log("myEmitter", myEmitter);


myEmitter.on("error", (err) => {
  console.error(`Caught an error: ${err.message}` );
});



myEmitter.emit("error", new Error("whoops!"));

