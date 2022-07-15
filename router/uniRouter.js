const express = require('express');
const uniRouter = express.Router();
const {uniService, uniServiceByName} = require('../services/uniService');

uniRouter.get('/', (req, res, next) => {
    uniService()
    .then((result) =>{
        res.status(200).json(result.data);
    })
    .catch((err) => {
        res.status(500).json({
            error:{
                message: err.message,
            },
        });
    });
});

uniRouter.get('/:name',(req,res,next) => {
uniServiceByName(req.params.name)
.then((result) =>{
    res.status(200).json(result.data);
})
    .catch((err) => {
        res.status(500).json({
            error:{
                message: err.message,
            },
        });
    });
});

module.exports = uniRouter;