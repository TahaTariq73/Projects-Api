const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: ""
    },
    codeLink: {
        type: String,
        default: ""
    },
    visitLink: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model("Project", projectSchema);