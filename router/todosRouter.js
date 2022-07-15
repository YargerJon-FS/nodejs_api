const express = require('express');
const todosRouter = express.Router();
const {todoService, todoServiceByName} = require('../services/todoService');

todosRouter.get('/', (req, res, next) => {
    todoService()
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

todosRouter.get('/:name', (req,res,next) => {
todoServiceByName(req.params.name)
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

module.exports = todosRouter;