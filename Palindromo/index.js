const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const diacriticless = require('diacriticless');

app.use(bodyParser.json());

app.post('/verificarPalindromo', (req, res) => {
  const palabra = req.body.palabra;

  if (!isNaN(palabra)) {
    return res.status(404).json({ message: 'No se pudo comprobar la palabra' });
  }

  const palabraSinEspacios = palabra.replace(/\s/g, '').toLowerCase();

  const palabraSinTildes = diacriticless(palabraSinEspacios);

  const palabraInvertida = palabraSinTildes.split('').reverse().join('');
  if (palabraSinTildes === palabraInvertida) {
    return res.status(200).json({ message: `${palabra} es una palabra palíndroma.` });
  } else {
    return res.status(302).json({ message: `${palabra} no es una palabra palíndroma.` });
  }
});

app.listen(3000, () => {
  console.log('Servicio de verificación de palíndromos iniciado en el puerto 3000');
});
