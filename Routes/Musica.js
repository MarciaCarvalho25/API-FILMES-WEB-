const express = require('express');
const Musica = require('../models/Musica');
const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const musica = await Musica.create(req.body);
    res.status(201).json(musica);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const musicas = await Musica.findAll();
    res.status(200).json(musicas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const musica = await Musica.findByPk(req.params.id);
    if (musica) {
      res.status(200).json(musica);
    } else {
      res.status(404).json({ error: 'Musica not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const musica = await Musica.findByPk(req.params.id);
    if (musica) {
      await musica.update(req.body);
      res.status(200).json(musica);
    } else {
      res.status(404).json({ error: 'Musica not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const musica = await Musica.findByPk(req.params.id);
    if (musica) {
      await musica.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Musica not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

