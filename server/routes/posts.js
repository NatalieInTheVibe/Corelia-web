const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { Post, validatePost } = require('../models/post');
const { User } = require('../models/user');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await Post.find().sort('date');
    res.send(posts);
});

router.post('/', auth, async (req, res) => {
    const { error } = validatePost(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = await User.findById(req.user._id).select('-password');

    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        user: {
            _id: user._id,
            email: user.email
        }
    });
    await post.save();

    res.send(post);
});

router.put('/:id', [auth, admin], async (req, res) => {
    const { error } = validatePost(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const post = await Post.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        body: req.body.body,
        iframe: "<iframe\n" +
            "src=\"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&width=500&show_text=true&height=274&appId\"\n" +
            "width=\"500\" height=\"300\" style={iframestyle} scrolling=\"no\" frameBorder=\"0\"\n" +
            "allowFullScreen=\"true\"\n" +
            "allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\"></iframe>"
    }, { new: true });

    if (!post) return res.status(404).send('The post with the given ID was not found.');

    res.send(post);
});

router.delete('/:id', [auth, admin], async (req, res) => {
    const post = await Post.findByIdAndRemove(req.params.id);

    if (!post) return res.status(404).send('The post with the given ID was not found.');

    res.send(post);
});

router.get('/:id', async (req, res) => {
    const post = await Post.validatePost(req.params.id);

    if (!post) return res.status(404).send('The post with the given ID was not found.');

    res.send(post);
});

module.exports = router; 