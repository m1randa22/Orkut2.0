const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('photo'), (req, res) => {
  res.redirect('/perfil');
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});