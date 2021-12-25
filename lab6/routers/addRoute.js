import express from 'express';

const addRoute = express.Router();
const urlencodedParser = express.urlencoded({extended: false});

addRoute.get('/', (req, res) => {
    res.render('tweetAddPage');
})

addRoute.post('/', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    res.render('tweetOwnPage', {name: req.body.name, username: req.body.username ,text: req.body.text})
})
export default addRoute;