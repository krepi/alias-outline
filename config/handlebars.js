const { engine } = require('express-handlebars');
const path = require('path');

module.exports = (app) => {
    app.engine('hbs', engine({
        extname: '.hbs',
        defaultLayout: 'main',
        helpers: {
            eq: function (a, b) {
                return a === b;
            }
        }
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../views'));
};
