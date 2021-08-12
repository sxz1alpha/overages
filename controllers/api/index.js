const router = require('express').Router();

userRoutes = require('./user-routes');
defendantRoutes = require('./defendant-routes');

router.use('/user', userRoutes);
router.use('/defendant', defendantRoutes);

module.exports = router;