import express from 'express';
import mongoose from 'mongoose';
import homeRouter from "./routes/homeRouter.js";
import userRouter from './routes/userRouter.js'
import postRouter from "./routes/postRouter.js";
import actualRouter from "./routes/actualRouter.js";
import searchRouter from "./routes/searchRouter.js";

const app = express();
app.use(express.json());
const urlencodedParser = express.urlencoded({extended: false});
const port = '3000';

//TODO: Заменить ссылку на свою
const url = 'mongodb+srv://bobiklovik7:fZqWs$z6@cluster0.itliq.mongodb.net/cluster0?retryWrites=true&w=majority'

mongoose.connect(url, () => console.log('Mongo connected'))

app.use('/', homeRouter);
app.use('/post', postRouter);
app.use('/actual', actualRouter);
app.use('/user', userRouter);
app.use('/search', searchRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})