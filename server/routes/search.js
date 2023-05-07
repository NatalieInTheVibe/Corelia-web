const _ = require('lodash');
const { Piece } = require('../models/piece');
const { Composer } = require('../models/composer');
const { Recommend } = require('../models/recommend');
const express = require('express');
const router = express.Router();

router.get('/composer', async (req, res) => {

    const reg1 = new RegExp(req.query.key, "i");
    const reg2 = new RegExp(req.query.nationality, "i");
    let result = "";

    if (!req.query.nationality) {
        result = await Composer.find(
            {
                "$or": [
                    { name: { $regex: reg1 } },
                    { nationality: { $regex: reg1 } }
                ]
            }
        );
    } else {
        result = await Composer.find(
            {
                "$and": [
                    { name: { $regex: reg1 } },
                    { nationality: { $regex: reg2 } }
                ]
            }
        );
    }

    res.send(result);
});


router.get('/piece', async (req, res) => {

    const reg1 = new RegExp(req.query.key, "i");
    const reg2 = new RegExp(req.query.instrument, "i");
    const reg3 = new RegExp(req.query.publisher, "i");
    let result = "";

    if (!req.query.instrument && !req.query.publisher) {
        result = await Piece.find(
            {
                "$or": [
                    { name: { $regex: reg1 } },
                    { instruments: { $regex: reg1 } },
                    { publisher: { $regex: reg1 } },
                    //{"composer.name": {$elemMatch: {$regex: reg1}}},
                ]
            }
        );
        result = result.concat(await Piece.aggregate([
            { $unwind: "$composer" },
            { $match: { "composer.name": { $regex: reg1 } } },
        ]))

    } else if (!req.query.instrument) {
        result = await Piece.find(
            {
                "$and": [
                    { name: { $regex: reg1 } },
                    { publisher: { $regex: reg3 } },
                ]
            }
        );
    } else if (!req.query.publisher) {
        result = await Piece.find(
            {
                "$and": [
                    { name: { $regex: reg1 } },
                    { instruments: { $regex: reg2 } },
                ]
            }
        );
    } else {
        result = await Piece.find(
            {
                "$and": [
                    { name: { $regex: reg1 } },
                    { instruments: { $regex: reg2 } },
                    { publisher: { $regex: reg3 } },
                ]
            }
        );
    }

    res.send(result);
});

router.get('/instrument/:instrument', async (req, res) => {

    const reg = new RegExp(req.params.instrument, "i");

    result = await Piece.find(
        {
            instruments: { $regex: reg }
        }
    );


    res.send(result);
});

router.get('/recommend/:title', async (req, res) => {

    const reg = new RegExp(req.params.title, "i");

    result = await Recommend.find(
        {
            title: { $regex: reg }
        }
    );


    res.send(result);
});


module.exports = router; 