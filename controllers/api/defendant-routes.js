const router = require('express').Router();
const { Defendant } = require('../../models');

// routes built in order to follow CRUD (create, read, update, delete) model.

// =========================================CREATE======================================
//create a new user.
router.post('/', (req, res) => {
    Defendant.create({
        parcel_id: req.body.parcel_id,
        def_name: req.body.def_name,
        co_def: req.body.co_def,
        amount: req.body.amount,
        sale_date: req.body.sale_date,
        owner_mail_add: req.body.owner_mail_add,
        city_state: req.body.city_state

    })
    .then(defendantData => {
        res.json(defendantData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// =================================================READ===========================================
// get all users
router.get('/', (req, res) => {
    Defendant.findAll({})
    .then(defendantData => res.json(defendantData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//get specific user by id
router.get('/:id', (req, res) => {
    Defendant.findOne({
        where: {
            id: req.params.id
        },
    })
    .then(defendantData => {
        if(!defendantData) {
            res.status(404).json({ message: ''})
            return;
        }
        res.json(defendantData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// ======================================================UPDATE===================================================
// update user info
router.put('/:id', (req,res) => {
    Defendant.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(defendantData => {
        if(!defendantData) {
            res.status(404).json({ message: ''});
        }
        res.json(defendantData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// ======================================================DELETE=============================================
//delete a user
router.delete('/:id', (req, res) => {
    Defendant.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(defendantData => {
        if(!defendantData) {
            res.status(404).json({ message: ''})
        }
        res.json(defendantData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})


module.exports = router;