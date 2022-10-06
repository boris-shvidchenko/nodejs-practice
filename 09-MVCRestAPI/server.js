// mvc (model, view, controller) rest api

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing, third party middleware

app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// 'content-type: application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// built-in middleware for serving static files
app.use(express.static(path.join(__dirname, '/public'))); 

// routes
app.use('/', require('./routes/root'));
app.use('/employees', require('./routes/api/employees'));

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

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));