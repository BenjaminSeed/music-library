const express = require('express');
const albumController = require('../controllers/album');

const router = express.Router();

router.post('/', albumController.create);
router.delete('/:albumId', albumController.delete);

module.exports = router;
