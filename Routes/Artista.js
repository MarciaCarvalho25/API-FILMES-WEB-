const express = require('express');
const Artista = require('../models/Artista');
const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const artista = await Artista.create(req.body);
    res.status(201).json(artista);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const artistas = await Artista.findAll();
    res.status(200).json(artistas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const artista = await Artista.findByPk(req.params.id);
    if (artista) {
      res.status(200).json(artista);
    } else {
      res.status(404).json({ error: 'Artista not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const artista = await Artista.findByPk(req.params.id);
    if (artista) {
      await artista.update(req.body);
      res.status(200).json(artista);
    } else {
      res.status(404).json({ error: 'Artista not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const artista = await Artista.findByPk(req.params.id);
    if (artista) {
      await artista.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Artista not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
