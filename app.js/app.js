const express = require('express');
const uniRouter = require('../router/uniRouter');
const app = express ();
//http://Localhost:3000
//http://universities.hipolabs.com/
app.get('/', (req, res, next) => {
    res.status(200).json({ message: "Service is up" });
});
//router middleware
app.use('/uni', uniRouter);
// add middleware to handle errors and bad url paths
app.use((req, res, next) => {
    const error = new Error("NOT FOUND!!");
    error.status = 404;
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        },
    });
});


module.exports = app;
