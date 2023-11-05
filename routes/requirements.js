const express = require('express');
const router = express.Router();
const Requirement = require('../models/Requirement');



router.post('/', async (req, res) => {
  const newRequirement = new Requirement(req.body);
  try {
    const savedRequirement = await newRequirement.save();
    res.status(201).json(savedRequirement);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
});

module.exports = router;

router.get('/', async (req, res) => {
  try {
    const homeName = req.query.homeName; 
    let requirements;

    if (homeName) {
      requirements = await Requirement.find({ homeName });
    } else {
      requirements = await Requirement.find();
    }

    res.json(requirements);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


