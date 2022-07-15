const axios = require('axios');
require('dotenv').config();


const todoService = async () => {
    console.log('Real Universities');
    return await axios.get(`${process.env.uniURL}`);
};

const todoServiceByName = async (name) => {
    console.log('Real universitties by Name');
    return await axios.get(`${process.env.uniURL}${name}`);
};

module.exports = {todoService, todoServiceByName };