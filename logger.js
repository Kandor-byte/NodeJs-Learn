//function(exports, require, module, __filename, __dirname)
//var x =;

//console.log(__dirname);
//console.log(__filename);

const EventEmitter = require("events");
//const emitter = new EventEmitter();

var url = "https://";

class Logger extends EventEmitter {
     log(message) {
        // Send an HTTP request
        console.log(message);
    
        //Raise an event
        this.emit("messageLogged", {id: 1, url: "http://"});
    }
}

//module.exports.log = log;
//module.exports.endPoint = url;

module.exports = Logger;