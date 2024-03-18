const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

const FilingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type_of_filling: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.export = mongoose.Model('Filing', FilingSchema);