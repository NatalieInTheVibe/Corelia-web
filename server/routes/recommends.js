const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
//const _ = require('lodash');
const { Recommend, validate } = require('../models/recommend');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const recommends = await Recommend.find().sort('title');
    res.send(recommends);
});

router.post('/admin', [auth, admin], async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //const recommend = new Recommend(_.pick(req.body, ['title', 'body','image']));
    const recommend = new Recommend({
        title: req.body.title,
        body: req.body.body,
        image: req.body.image
    });
    await recommend.save();

    res.send(recommend);
});
router.delete('/:id', [auth, admin], async (req, res) => {
    const recommend = await Recommend.findByIdAndRemove(req.params.id);

    if (!recommend) return res.status(404).send('The recommendation with the given ID was not found.');

    res.send(recommend);
});
// router.put('/:id', [auth, admin], async (req, res) => {
//     const { error } = validate(req.body);
//     if (error) return res.status(400).send(error.details[0].message);
// //
//     const recommend = await Recommend.findByIdAndUpdate(req.params.id, _.pick(req.body, ['title', 'body', 'date']), { new: true });
//
//     if (!recommend) return res.status(404).send('The recommendation with the given ID was not found.');
//
//     res.send(recommend);
// });


// router.get('/:id', async (req, res) => {
//     const recommend = await Recommend.findById(req.params.id);
//
//     if (!recommend) return res.status(404).send('The recommendation with the given ID was not found.');
//
//     res.send(recommend);
// });

module.exports = router;