const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
  res.render('index');
});

// Ruta proyectos
router.get('/proyectos', (req, res) => {
  res.render('proyectos');
});

// Ruta Habilidades
router.get('/habilidades', (req, res) => {
  res.render('Habilidades');
});

// Ruta contacto
router.get('/contacto', (req, res) => {
  res.render('contacto');
});

// Ruta inicio
router.get('/index', (req, res) => {
  res.render('index');
});

module.exports = router;
