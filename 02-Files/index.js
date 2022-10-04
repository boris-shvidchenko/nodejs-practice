// ==== reading and writing files ====

// use require to import fs (File System), and other, common core module
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

// read file
fs.readFile('./starter.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});

// or, to avoid hardcoding we can use path...
fs.readFile(path.join(__dirname, 'starter.txt'), (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});

// to catch an error, to test change file name above to a non-existing file
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})

// write file
fs.writeFile(path.join(__dirname, 'reply.txt'), 'Nice to meet you', (err) => {
    if (err) throw err;
    console.log('Write complete.');
});

// append to file
// if file doesn't exist, a new file will be created
fs.appendFile(path.join(__dirname, 'test.txt'), 'Testing text', (err) => {
    if (err) throw err;
    console.log('Append complete.');
});

// rename a file 
fs.rename(path.join(__dirname, 'test.txt'), path.join(__dirname, 'newTest.txt'), (err) => {
    if (err) throw err;
    console.log('Rename complete.');
});

// using async/await to make an async operation with node
async function fileOps() {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'));
        console.log(data.toString());
    } catch(err) {
        console.error(err)
    }
}

fileOps();