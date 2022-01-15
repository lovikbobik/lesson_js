import express from 'express';
import { Posts } from "../models/postsModel.js";

const urlencodedParser = express.urlencoded({extended: false});

//TODO: Написать роут для твиттов (напр. /post)
const postRouter = express.Router();

//TODO: Написать запрос для получения всех твиттов (пока можно хранить ввиде JSON файла или JS объекта)
postRouter.get('/', (req, res) => {
    Posts.find({}, (err, post) => {
        if (err) {
            res.send('Posts not found')
        } else {
            res.send(post)
        }
    })
});

//TODO: Написать запрос для получения твитта по его ID
postRouter.get('/:id', (req, res) => {
    Posts.findOne({id: req.params.id}, (err, post) => {
        if (err) {
            res.send('Post not found')
        } else {
            res.send(post)
        }
    })
})
//TODO: Написать POST запрос для отправки твитта (пока никуда записывать его не надо, нужно просто вернуть отправвленные данные назад)
postRouter.post('/', urlencodedParser, (req, res) => {
    const newPost = new Posts({
        id: req.body.id,
        avatar: req.body.avatar,
        verified: req.body.verified,
        username: req.body.username,
        text: req.body.text,
        image: req.body.image,
        countComments: req.body.countComments,
        countLikes: req.body.countLikes,
        countRetweets: req.body.countRetweets,
        isLiked: req.body.isLiked
    })
    newPost.save((err) => {
        if (err) {
            res.send(err)
        } else {
            res.send(req.body)
        }
    })
})

export default postRouter