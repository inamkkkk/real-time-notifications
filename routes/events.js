const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, eventController.createEvent);
router.get('/', authMiddleware, eventController.getAllEvents);

module.exports = router;