const express = require('express');
const app = express();

// Porta definida pelo Render
const PORT = process.env.PORT || 3000;

// Exemplo de rota
app.get('/', (req, res) => {
  res.send('API rodando no Render!');
});

// Outras rotas que você tiver podem ir aqui

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
