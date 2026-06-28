const mongoose = require('mongoose');
const dns=require("dns")

const DB_URL = process.env.DB_URL;

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'

])

mongoose.connect(DB_URL)
    .then(() => {
        console.log('MongoDB is Connected...');
    }).catch((err) => {
        console.log('MongoDB Conn Error...', err);
    })