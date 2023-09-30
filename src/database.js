const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1/usuarios_db';
// const URI = 'mongodb+srv://areaspepelucho:12345678@joseups.orftvmm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

mongoose.connect(URI)
.then(db=>console.log('DB CONECTADA'))
.catch(err=>console.log(err));


module.exports = mongoose;