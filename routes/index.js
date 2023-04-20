// routes/index.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'Magic Landworks - Sod Installation Specialists',
  });
});

module.exports = router;
