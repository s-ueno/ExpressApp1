/*
 * GET home page.
 */

// import express = require('express');
import express from "express";
import bodyParser = require('body-parser'); 
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', {
        message1: 'EJS',
        message2: 'EJS'
    });
});

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/", (req, res) => {
    console.log(req.body.message1);
    res.render('index', {
        message1: 'Hello! ' + req.body.message1,
        message2: 'Hello! ' + req.body.message2,
    });
});
export default router;