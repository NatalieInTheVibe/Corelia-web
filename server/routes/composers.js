const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const _ = require('lodash');
const { Composer, validate } = require('../models/composer');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const composers = await Composer.find().sort('name');
    res.send(composers);
});

router.post('/admin', [auth, admin], async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const composer = new Composer(_.pick(req.body, ['name', 'DOB', 'nationality', 'website','biography','image']));
    await composer.save();

    res.send(composer);
});

router.put('/:id', [auth, admin], async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
//
    const composer = await Composer.findByIdAndUpdate(req.params.id, _.pick(req.body, ['name', 'DOB', 'nationality', 'website', 'biography','image']), { new: true });

    if (!composer) return res.status(404).send('The composer with the given ID was not found.');

    res.send(composer);
});

router.delete('/:id', [auth, admin], async (req, res) => {
    const composer = await Composer.findByIdAndRemove(req.params.id);

    if (!composer) return res.status(404).send('The composer with the given ID was not found.');

    res.send(composer);
});

router.get('/:id', async (req, res) => {
    const composer = await Composer.findById(req.params.id);

    if (!composer) return res.status(404).send('The composer with the given ID was not found.');

    res.send(composer);
});

module.exports = router; 