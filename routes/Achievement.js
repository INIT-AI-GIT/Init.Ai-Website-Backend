const express = require('express');
const Achievement = require('../models/achievement');
const achievementRouter = express.Router();

achievementRouter.get('/api/achievements', async (req, res) => {
  try {
    const achievements = await Achievement.find();
    res.json(achievements);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = achievementRouter;
