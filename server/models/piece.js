const Joi = require('joi');
const mongoose = require('mongoose');

const Piece = mongoose.model('Piece', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
    },
    composer: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 255,
            },
            _id: {
                type: String,
                minlength: 5,
                maxlength: 255
            }
        })
    },
    duration: {
        type: String,
        minlength: 1,
        maxlength: 5,
    },
    year: {
        type: String,
        minlength: 2,
        maxlength: 50,
    },
    instruments: {
        type: String,
        minlength: 2,
        maxlength: 255,
    },
    recordingLink: {
        type: String,
        minlength: 2,
        maxlength: 255,
    },
    publisher: {
        type: String,
        minlength: 2,
        maxlength: 255,
    },
    scoreLink: {
        type: String,
        minlength: 2,
        maxlength: 255,
    },
    image: {
        type: String,
        minlength: 2,
        maxlength: 255,
    }

}));

function validatePiece(piece) {
    const schema = Joi.object({
        name: Joi.string().min(2).max(255).required(),
        composerID: Joi.string().required(),
        duration: Joi.string().min(1).max(5),
        year: Joi.string().min(2).max(50),
        instruments: Joi.string().min(2).max(255),
        recordingLink: Joi.string().min(2).max(255),
        publisher: Joi.string().min(2).max(255),
        scoreLink: Joi.string().min(2).max(255),
        image: Joi.string().min(2).max(255),
    });

    return schema.validate(piece);
}

exports.Piece = Piece;
exports.validate = validatePiece;