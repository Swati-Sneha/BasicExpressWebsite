const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.send('Developing');
    });

    router.post('/', (req, res, next) => {
        return res.send('Form sent');
    });
    
    return router;
};