import express from 'express';
import homeRoute from './routers/homeRoute.js';
import userRoute from './routers/userRoute.js'
import tweetRoute from './routers/tweetRoute.js';
import addRoute from './routers/addRoute.js';
import actualRoute from './routers/actualRoute.js';
import searchRoute from './routers/searchRoute.js';

const app = express();
app.set('view engine', 'pug');
app.set("views", "./views");
const PORT = '8000';

app.use('/', homeRoute);
app.use('/user', userRoute);
app.use('/tweet', tweetRoute);
app.use('/add', addRoute);
app.use('/actual', actualRoute);
app.use('/search', searchRoute);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});