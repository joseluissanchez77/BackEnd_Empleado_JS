require('./database')
const app = require('./app')
app.listen(app.get('puerto'), () => {
  console.log('Nombre de la App', app.get('nombreApp'));
  console.log('Puerto del servidor', app.get('puerto'));
})
/*const express = require("express");

const PORT = 8000;

const app = express();

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

*/