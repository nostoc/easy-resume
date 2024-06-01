const mongoose = require("mongoose");

const resumeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    objective: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
});

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;