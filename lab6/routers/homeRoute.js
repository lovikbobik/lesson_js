import express from 'express';

const homeRoute = express.Router();

homeRoute.get('/', (req, res) => {
    res.render('mainPage');
})

export default homeRoute;