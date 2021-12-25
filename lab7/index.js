import express from 'express';
import mongoose from 'mongoose';
import { Comments } from "./Models/commentsModel.js";

const app = express();
const urlencodedParser = express.urlencoded({extended: false});

const port = '8000';

//TODO: Заменить ссылку на свою
//'mongodb+srv://ЛОГИН:ПАРОЛЬ@АДРЕСС_МОНГОДБ.NET/НАЗВАНИЕ_БАЗЫ?retryWrites=true&w=majority'
const url = 'mongodb+srv://root:root@mongodb.net/sample_mflix?retryWrites=true&w=majority'

mongoose.connect(url, () => console.log('Mongo   connected'))

//TODO: Пример простейшего запроса к монго
app.get('/comment/:name', (req, res) => {
    Comments.findOne({name: req.params.name}, (err, comment) => {
        if (err) {
            res.send('Comment not found')
        } else {
            res.send(comment)
        }
    })
})

app.post('/add_comment', urlencodedParser, (req, res) => {
    const newComment = new Comments({
        name: req.body.name,
        email: req.body.email,
        text: req.body.text,
        movie_id: '573a1390f29313caabcd446f',
        date: new Date(),
    })
    newComment.save((err) => res.send(err))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})