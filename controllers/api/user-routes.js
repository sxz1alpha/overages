const router = require('express').Router();
const { User } = require('../../models');
const sessConf = require('../../utils/sessConf');
// routes built in order to follow CRUD (create, read, update, delete) model.


// =======================================CREATE=======================================
//create a new user.
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
    })
    .then(userData => {
        req.session.save(() => {
            req.session.id = userData.id;
            req.session.email = userData.email;
            req.session.loggedIn = true;

            res.json(userData);
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});
// =======================================READ=============================================
// login to user account
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(userData => {
        if(!userData) {
            res.status(400).json({ message: 'No user found with that id.'});
            return;
        }

        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
          res.status(400).json({ message: 'Your username password combination doesnt match any in the databse!' });
          return;
        }

        req.session.save(() => {
            req.session.id = userData.id;
            req.session.email = userData.email;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You are logged in.' });
        });
    })     
});

//logout functionality
router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end()
    }

});

// get all users
router.get('/', (req, res) => {
    User.findAll ({
        attributes: { exclude: ['password'] }
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



//get specific user by id
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password'] }
    })
    .then(userData => {
        if(!userData) {
            res.status(404).json({ message: 'no user with this id found. '})
            return;
        }
        res.json(userData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// =================================================UPDATE============================================
// update user info
router.put('/:id', sessConf, (req,res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if(!userData) {
            res.status(404).json({ message: 'Unable to update. could not find a user with that id!'});
        }
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// ====================================================DELETE=====================================================
//delete a user
router.delete('/:id', sessConf, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if(!userData) {
            res.status(404).json({ message: 'Cant delete a user that doesnt exist. "How do you kill that which has no life?" '})
        }
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})


module.exports = router;