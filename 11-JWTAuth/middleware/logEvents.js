// event emitters
// npm modules
const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

// common core modules
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

async function logEvents(message, logName) {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    // creates a new log file if it does not exist already, otherwise append to existing file
    try {
        // if logs folder doesn't exist, create new directory ('logs)
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem);
    } catch (err) {
        console.log(err);
    }
} 

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
    console.log(`${req.method} ${req.path}`);
    next();
}

// export module 
module.exports = { logEvents, logger };
