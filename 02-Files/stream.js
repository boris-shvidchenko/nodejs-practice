// using streams to work with large files more efficiently.
// benefits of using streams > "What makes streams unique, is that instead of a program reading a file into memory all at once like in the traditional way, streams read chunks of data piece by piece, processing its content without keeping it all in memory." < quote obtained from https://nodesource.com/blog/understanding-streams-in-nodejs/
const fs = require('fs');
const readStream = fs.createReadStream('./lorem.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./newLorem.txt');

readStream.on('data', (dataChunk) => {
    writeStream.write(dataChunk);
})

// or use this, same functionality as above but shorter
// readStream.pipe(writeStream);