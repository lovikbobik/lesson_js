import express from 'express';
import { Actual } from "../models/actualModel.js";

// const urlencodedParser = express.urlencoded({extended: false});

//TODO: Роут для актуального
const actualRouter = express.Router();

//TODO: Написать запрос на получение списка актуального
actualRouter.get('/', (req, res) => {
    Actual.find({}, (err, posts) => {
        if (err) {
            res.send('Error: Posts not found')
        } else {
            res.send(posts)
        }
    })
});

export default actualRouter