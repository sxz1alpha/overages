const router = require('express').Router();

userRoutes = require('./user-routes');

router.use('/user', userRoutes);

module.exports = router;