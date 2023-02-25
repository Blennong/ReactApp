const { Router } = require('express');
const { postGet, postPost, postDelete } = require('../controllers/post.controller');

const router = Router();

router.get('/', postGet);

router.post('/', postPost);

router.delete('/:id', postDelete);

module.exports = router