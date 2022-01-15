import express from 'express';

const urlencodedParser = express.urlencoded({extended: false});

const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
    res.send('Hello World!')
})

homeRouter.post('/', urlencodedParser, (req, res) => {
    const name = req.body.name;
    const responseMessage = "Hello " + name + "!"
    res.send(responseMessage)
})


export default homeRouter