// event emitters, here we create logs based on an event
// npm modules
const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

// common core modules
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

async function logEvents(message) {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    // creates a new log file if it does not exist already, otherwise append to existing file
    try {
        // if logs folder doesn't exist, create new directory ('logs)
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
    } catch (err) {
        console.log(err);
    }
} 

// export module 
module.exports = logEvents;
