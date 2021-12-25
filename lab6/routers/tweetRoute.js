import express from 'express';
import tweet from "../data/tweetItems.js";

const tweetRoute = express.Router();

tweetRoute.get('/', (req, res) => {
    res.render('tweetPage', {tweet_: tweet})
})

tweetRoute.get('/:id', (req, res) => {
    const post = tweet.filter((value) => value.id == req.params.id);
    res.render('tweetPage', {tweet_: post});
});

export default tweetRoute;

