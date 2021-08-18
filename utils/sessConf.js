const sessConf = (req, res, next) => {
    if(!req.session.id) {
        res.redirect('/')
    } else {
        next();
    }
};

module.exports = sessConf