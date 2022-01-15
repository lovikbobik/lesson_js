import express from 'express';
import {Users} from "../models/usersModel.js";


const userRouter = express.Router();

//TODO: Написать запрос на получение всех пользователей
userRouter.get('/', (req, res) => {
    Users.find({}, (err, users) => {
        if (err) {
            res.send('Error: user not found')
        } else {
            res.send(users)
        }
    })
});

//TODO: Возращать данные из какого-нибудь статичного JSON файла или простого JS объекта по ID пользователя и выводить на экран его никнейм.
userRouter.get('/:id', (req, res) => {
    Users.findOne({id: req.params.id}, (err, user) => {
        if (err) {
            res.send('Error: user not found')
        } else {
            res.send(user)
        }
    })
})


export default userRouter