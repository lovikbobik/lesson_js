import express from 'express';
import tweet from '../data/tweetItems.js';

const urlencodedParser = express.urlencoded({extended: false});
const searchRoute = express.Router();

searchRoute.get('/', urlencodedParser, (req, res) => {
        let queries = req.query;
        let post;

        if (queries['text'])
            post = tweet.filter(item => item.text.includes(queries['text']));

        if (queries['username'])
            post = tweet.filter(item => item.username.includes(queries['username']));


        res.render('searchPage', {post_: post});
    }

)
    export default searchRoute;