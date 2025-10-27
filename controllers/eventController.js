const Event = require('../models/Event');
const { broadcast } = require('../utils/websocket');

exports.createEvent = async (req, res) => {
  try {
    const { title, description } = req.body;
    const event = new Event({ title, description });
    await event.save();
    broadcast(JSON.stringify(event));
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};