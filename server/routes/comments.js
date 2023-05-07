const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { Post, validateComment } = require('../models/post');
const { User } = require('../models/user');
const express = require('express');
const router = express.Router();

router.put('/:id', auth, async (req, res) => {
    const { error } = validateComment(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = await User.findById(req.user._id).select('-password');

    const post = await Post.findByIdAndUpdate(req.params.id, {
        $push: {
            comment: {
                body: req.body.body,
                user: {
                    _id: user._id,
                    email: user.email
                }
            }
        }
    }, { new: true });
    if (!post) return res.status(404).send('The post with the given ID was not found.');

    res.send(post);
});

router.delete('/:postID/:commentID', [auth, admin], async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.postID, {
        $pull: {
            comment: {
                _id: req.params.commentID
            }
        }
    }, { new: true });

    if (!post) return res.status(404).send('The post with the given ID was not found.');

    res.send(post);
});


module.exports = router; 