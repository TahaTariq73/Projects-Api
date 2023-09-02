const express = require('express');
const Project = require("./projectSchema");
const connectToMongo = require("./config/db");

const app = express();

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "./config/config.env" });
}

connectToMongo();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.get('/projects', async (req, res) => {
    const projects = await Project.find({});
    res.json({ success: true, projects });
})

app.listen(process.env.PORT, () => {
    console.log(`Your app is listening on port:${process.env.PORT}`);
})