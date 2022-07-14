const axios = require('axios');
require('dotenv').config();


const todoService = async () => {
    console.log('Real Universities');
    return await axios.get(`${process.env.todosURL}`);
};

const todoServiceByName = async (name) => {
    console.log('Real universitties by Name');
    return await axios.get(`${process.env.todosURL}${NAME}`);
};

module.exports = {todoService, todoServiceByName };