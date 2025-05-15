const express = require('express');
const cors = require('cors');
require('dotenv').config();
const recipesRouter = require('./routes/foods'); // importa sua rota

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use('/api/recipes', recipesRouter)

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
