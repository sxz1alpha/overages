const router = require('express').Router();
const { User } = require('../models');


//renders the login page
router.get('/login', (req, res) => {
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


module.exports = router;