// intro to express js framework and how to route through/work with various pages 

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

// use express to serve a home page
// note on first parameter: ^ = starts with, $ = ends with, | = or, ()? = reg ex that makes .html optional during search
app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// use express to serve a new page
app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); // 301 = status code, 302 by default
});

// Route handlers
app.get('/hello(.html)?', (req, res, next) => {
    console.log('Attempted to load hello.html');
    next();
}, (req, res) => {
    res.send("Hello World!");
})

app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

// chaining route handlers
const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next();
}

const three = (req, res, next) => {
    console.log('three');
    res.send('Finished!');
}

app.get('/chain(.html)?', [one, two, three]);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));