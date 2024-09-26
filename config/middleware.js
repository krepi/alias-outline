const express = require('express');
const path = require('path');

module.exports = (app) => {
    // Middleware do obsługi plików statycznych
    app.use(express.static(path.join(__dirname, '../public')));

    // Middleware do obsługi danych POST (formularzy)
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
};
