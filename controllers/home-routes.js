const router = require('express').Router();
const { User } = require('../models');
const sessConf = require('../utils/sessConf')

//renders the login page
router.get('/', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/hotlist');
        return;
    } 
    res.render('loginPage');
});

//renders the sign up page
router.get('/sign-up', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/hotlist');
        return;
    }
    res.render('sign-up')
});

//renders the new defendant form
router.get('/new', sessConf, (req, res) => {
    if(!req.session.loggedIn) {
        res.render('loginPage')
        return;
    }
    res.render('newDefendant', {loggedIn: req.session.loggedIn});
});


module.exports = router;