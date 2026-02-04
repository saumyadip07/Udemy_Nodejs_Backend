const EventEmitter = require('events');



const myEmitter = new EventEmitter();


// event listener

myEmitter.on('greet', (name) => {

  console.log(`Hello, ${name}!`);
  
});

myEmitter.on("greet", (name) => {
  console.log(`This is second greet listener, ${name}!`);
});


myEmitter.once("pushNotify", (message) => {

  console.log(`Notification: ${message}`);

});

const myListener = () => console.log("This is a persistent listener.");

myEmitter.on("Hola", myListener);


// emitting event

myEmitter.emit("greet", "Saumya");
myEmitter.emit("greet", "Alex");
myEmitter.emit("pushNotify", "You have a new message!");
myEmitter.emit("pushNotify", "This will not be logged."); // because 'once' was used so it only triggers once and listener count becomes 0 
myEmitter.emit("Hola");
myEmitter.emit("Hola");
myEmitter.removeListener("Hola", myListener); //removing listener so listener count will be 0
myEmitter.emit("Hola"); // This will not log anything as the listener has been removed


console.log(myEmitter.listenerCount("greet"));
console.log(myEmitter.listeners("greet"));