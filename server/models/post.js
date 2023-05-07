const Joi = require('joi');
const mongoose = require('mongoose');

const Post = mongoose.model('Post', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200,
    },
    body: {
        type: String,
        minlength: 1,
        maxlength: 2000,
    },
    user: {
        type: new mongoose.Schema({
            email: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 255
            }
        }),
        required: true
    },
    comment: [{
        type: new mongoose.Schema({
            body: {
                type: String,
                minlength: 1,
                maxlength: 2000,
            },
            user: {
                type: new mongoose.Schema({
                    email: {
                        type: String,
                        required: true,
                        minlength: 5,
                        maxlength: 255
                    }
                }),
            },
            date: {
                type: Date,
                required: true,
                default: Date.now
            }
        })
    }],
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    iframe:{
        type: String,
        required:true,
        minlength: 5,
        maxlength: 255
    },
}));

function validatePost(post) {
    const schema = Joi.object({
        title: Joi.string().min(1).max(200).required(),
        body: Joi.string().min(1).max(2000).required(),
        iframe: Joi.string().min(5).max(250).required(),
    });

    return schema.validate(post);
}

function validateComment(post) {
    const schema = Joi.object({
        body: Joi.string().min(1).max(2000).required()
    });

    return schema.validate(post);
}

exports.Post = Post;
exports.validatePost = validatePost;
exports.validateComment = validateComment;