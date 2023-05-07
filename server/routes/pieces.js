const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { Piece, validate } = require('../models/piece');
const { Composer } = require('../models/composer');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const pieces = await Piece.find().sort('name');
    res.send(pieces);
});

router.post('/admin', auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const composer = await Composer.findById(req.body.composerID);
    if (!composer) return res.status(400).send('Invalid composer.');

    const piece = new Piece({
        name: req.body.name,
        composer: {
            _id: composer._id,
            name: composer.name,
        },
        duration: req.body.duration,
        year: req.body.year,
        instruments: req.body.instruments,
        recordingLink: req.body.recordingLink,
        publisher: req.body.publisher,
        scoreLink: req.body.scoreLink,
        image: req.body.image
    });
    await piece.save();

    res.send(piece);
});

router.put('/:id', [auth, admin], async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const piece = await Piece.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        duration: req.body.duration,
        year: req.body.year,
        instruments: req.body.instruments,
        recordingLink: req.body.recordingLink,
        publisher: req.body.publisher,
        scoreLink: req.body.scoreLink,
        image:req.body.image,
    }, { new: true });

    if (!piece) return res.status(404).send('The piece with the given ID was not found.');

    res.send(piece);
});

router.delete('/:id', [auth, admin], async (req, res) => {
    const piece = await Piece.findByIdAndRemove(req.params.id);

    if (!piece) return res.status(404).send('The piece with the given ID was not found.');

    res.send(piece);
});

router.get('/:id', async (req, res) => {
    const piece = await Piece.findById(req.params.id);

    if (!piece) return res.status(404).send('The piece with the given ID was not found.');

    res.send(piece);
});

module.exports = router; 