const express = require('express');

const router = express.Router();

// const projectsRoute = require('./projects');
const developRoute = require('./develop');

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.render('index');
    });

    
    // router.use('/projects', projectsRoute());
    router.use('/develop', developRoute());
    
    return router;
};