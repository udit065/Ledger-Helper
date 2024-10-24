const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

const FilingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: Number
    },
    address: {
        type: String
    },
    client_type: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.export = mongoose.model('Filing', FilingSchema);