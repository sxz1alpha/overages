const router = require('express').Router();
const sequelize = require('../config/connection');
const { Defendant } = require('../models');
const sessConf = require('../utils/sessConf');

router.get('/loginPage', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('loginPage');
});

router.get('/', sessConf, (req, res) => {
    Defendant.findAll({})
    .then(defendantData => {
        const defendant = defendantData.map(defendant => defendant.get({ plain: true }));
        console.log(defendant);
        res.render('hotlist', {defendant});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', sessConf, (req, res) => {
    Defendant.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'parcel_id',
            'def_name',
            'co_def_name',
            'amount',
            'sale_date',
            'owner_mail_add',
            'city_state'
        ]
    })
    .then(defendantData => {
        if(!defendantData) {
            res.status(404).json({ message: '404! Defendant data not found!'});
            return;
        }
        const defendant = defendantData.get({ plain: true });
        res.render('defendant', {
            defendant,

        })
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;