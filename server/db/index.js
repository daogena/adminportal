const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://admin1:login-info-0000@logininfo.z3bgq.mongodb.net/LoginInfo?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

