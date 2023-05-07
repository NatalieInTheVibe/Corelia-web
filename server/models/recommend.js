const Joi = require('joi');
const mongoose = require('mongoose');

const Recommend = mongoose.model('Recommend', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
    },
    body: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    image:{
        type: String,
        minlength: 1,
        maxlength: 255,
    }
}));

function validateRecommend(recommend) {
    const schema = Joi.object({
        title: Joi.string().min(1).max(255).required(),
        body: Joi.string().min(1).max(2000).required(),
        image: Joi.string().min(1).max(255),
    });

    return schema.validate(recommend);
}

exports.Recommend = Recommend;
exports.validate = validateRecommend;