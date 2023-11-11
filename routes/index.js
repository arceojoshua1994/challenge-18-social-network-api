const router = require('express').Router();
const apiRoutes = require('./api');

// Prefix all routes defined in the API directory with "/api"
router.use('/api', apiRoutes);

// In case any route is accessed that isn't defined, respond with a 404 status
router.use((req, res) => {
  res.status(404).send('404 Error!');
});

module.exports = router;
