const authRoutes = require('../routes/authRoutes');
const chatRoutes = require('../routes/chatRoutes');
const gameRoutes = require('../routes/gameRoutes');

module.exports = (app) => {
    app.use('/', authRoutes);  // Auth and home routes
    app.use('/chat', chatRoutes);  // Chat routes
    app.use('/game', gameRoutes);  // Game routes
};