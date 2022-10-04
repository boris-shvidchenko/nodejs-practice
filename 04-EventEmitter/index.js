const logEvents = require('./logEvents');
const EventEmmitter = require('events');
class MyEmitter extends EventEmmitter {};

// initialize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    myEmitter.emit('log', 'Log event emitted.');
}, 2000);