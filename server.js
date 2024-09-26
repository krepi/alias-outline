const app = require('./app');  // Import minimalnej aplikacji Express

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
