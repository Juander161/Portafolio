const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;


// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos públicos
app.use(express.static('public'));

// Usar rutas externas
const mainRouter = require('./router/mainRouter');
app.use('/', mainRouter);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
