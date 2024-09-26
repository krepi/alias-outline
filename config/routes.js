const chatRoutes = require('../routes/chatRoutes');
const gameRoutes = require('../routes/gameRoutes');

module.exports = (app) => {
    app.use('/', chatRoutes);  // Chat routes
    app.use('/game', gameRoutes);  // Game routes
};
