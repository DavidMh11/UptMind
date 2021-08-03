const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:8100'}))


//Routes
app.use('/api/citas',require('./routes/citas.routes'))

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Serve on port ', app.get('port'));
})
