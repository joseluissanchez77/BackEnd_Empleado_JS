const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
//settings
app.set('puerto', process.env.PORT || 3000);
app.set('nombreApp', 'Gestión de empleados');



//middeleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); 

//routes
app.use('/api/empleados', require('./routes/empleados.routes'))

module.exports = app;


// const express = require('express');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const app = express();
//settings
// app.set('puerto', process.env.PORT || 3000);
// app.set('nombreApp', 'Gestión de empleados');
// app.use(morgan('dev'));
// // // // app.set('view engine', 'ejs');
// // // // // app.use(express.json());
// // // // app.use(bodyParser.urlencoded({ extended: false }));
// // // // app.use(bodyParser.json());

// // // // app.use(async (req, res, next) => {
// // // //     return next()
// // // // })

// app.use('/api/empleados', require('./routes/empleados.routes.js'));

// module.exports = app;
