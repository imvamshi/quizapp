const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    date: {
        type: String,
    },
    score: {
        type: String,
    },
    correct: {
        type: Number,
    },
    incorrect: {
        type: Number,
    },
    other: {
        type: String,
    },
    log: {
        type: String
    }
}, { collection: 'logs' });

module.exports = mongoose.model("log", logSchema);