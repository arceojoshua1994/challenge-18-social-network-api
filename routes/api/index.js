const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// Add `'/users'` prefix to userRoutes
router.use('/users', userRoutes);

// Add `'/thoughts'` prefix to thoughtRoutes
router.use('/thoughts', thoughtRoutes);

module.exports = router;
