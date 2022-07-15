const axios = require('axios');
require('dotenv').config();


const uniService = async () => {
    console.log('Real Universities');
    return await axios.get(`${process.env.uniURL}`);
};

const uniServiceByName = async (name) => {
    console.log('Real universitties by Name');
    return await axios.get(`${process.env.uniURL}${name}`);
};

module.exports = {uniService, uniServiceByName };