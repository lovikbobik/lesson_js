import express from 'express';
import users from "../data/userItems.js";

const userRoute = express.Router();

userRoute.get('/:id', (req, res) => {
    const _user = users.filter((value) => value.id == req.params.id);
    res.render('userPage', {user_: _user});
});


userRoute.get('/', (req, res) => {
    res.render('userPage', {user_: users})
})

export default userRoute;