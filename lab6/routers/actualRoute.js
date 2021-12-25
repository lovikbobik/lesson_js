import express from 'express';
import actual from "../data/actualItems.js";

const actualRoute = express.Router();

actualRoute.get('/', (req, res) => {
    res.render('actualPage', {trends: actual})
})

export default actualRoute;