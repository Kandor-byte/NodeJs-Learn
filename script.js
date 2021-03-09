function sayHello(name){
    console.log("Hello " + name);
}

//sayHello("Andor");

//var message = "Hello";

//console.log(global.message);

var sayHello = function(name) {
    console.log("Hello " + name);
}

//sayHello("Shux");

//console.log(module);

//const logger = require("./logger"); always store this in constant variable

//logger.log("message");

//logger("message2");

//const path = require("path");

//var pathObj = path.parse(__filename);

//console.log(pathObj );

//const os = require("os");

//var totalMemory = os.totalmem();

//var freeMemory = os.freemem();

//console.log("Total memory = " + totalMemory);

//Template string
//ES6 / ES2015 : ECMAScript 6

//console.log(`Total Memory: ${totalMemory}`);
//console.log(`Free Memory: ${freeMemory}`);

//const fs = require("fs");

//const files = fs.readdirSync("./");

//console.log(files);

/* fs.readdir("$", function(err, files){
    if(err){
        console.log("Error", err);
    } else {
        console.log("Result", files);
    }
}); */ 

const EventEmitter = require("events");
//const emitter = new EventEmitter();
const logging = new EventEmitter();

const Logger = require("./logger");
const logger = new Logger();

//Register a Listener
logger.on("messageLogged", (arg) => { //e, event
    console.log("Listener called", arg);
});

logging.on("logging", (arg) => {
    console.log("Raise: logging", arg);
});


logging.emit("logging", {data: "message"});
//Raise: logging (data: message)

logger.log("üzenet");