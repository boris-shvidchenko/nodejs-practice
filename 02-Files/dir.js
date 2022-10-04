// to create a new directory/folder
const fs = require('fs');

// existsSync > if directory already exists, do not create a new directory
if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
    });
}

// to delete a directory
if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
    });
}