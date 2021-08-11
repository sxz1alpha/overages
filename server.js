const express = require('express');
// const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');
const methods = require('./utils/methods');
const hbs = exphbs.create({ methods });
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//     secret: '#3245',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore ({
//         db:sequelize
//     })
// };

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session(sess));
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');

// Turns on routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Overages is now online!"));
});