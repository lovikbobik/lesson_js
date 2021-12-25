import express from 'express';
import tweet from '../data/tweetItems.js';

const urlencodedParser = express.urlencoded({extended: false});
const searchRoute = express.Router();

searchRoute.post('/', urlencodedParser, (req, res) => {
        const post = tweet.filter(item => item.text.includes(req.body))
        if (post.length === 0) {
            res.send("<h2>Не найдено совпадений</h2>");
        } else {
            let all_posts = "";
            for (let item of post) {
                all_posts += item;
            }
            res.send(all_posts);
        }
    }
)
export default searchRoute;