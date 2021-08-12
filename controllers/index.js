const router = require('express').Router();

const apiRoutes = require('./api');
const hotListRoutes = require('./hotlist-routes');


router.use('/api', apiRoutes);
router.use('/', hotListRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;