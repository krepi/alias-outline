const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');


router.get('/addUser/:username', gameController.addUser);


router.get('/updateScore/:username/:points', gameController.updateScore);

module.exports = router;
