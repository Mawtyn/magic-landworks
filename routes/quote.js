// routes/quote.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/quote', {
    title: 'Get an Instant Quote - Magic Landworks',
    sodOptions: [
      { value: 'option1', label: 'Sod Option 1' },
      { value: 'option2', label: 'Sod Option 2' },
      { value: 'option3', label: 'Sod Option 3' },
      { value: 'option4', label: 'Sod Option 4' },
      { value: 'option5', label: 'Sod Option 5' },
      { value: 'option6', label: 'Sod Option 6' },
      { value: 'option7', label: 'Sod Option 7' },
      { value: 'option8', label: 'Sod Option 8' },
    ],
  });
});

module.exports = router;
