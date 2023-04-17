require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database/connection");

connection();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use("/",require("./routes/router"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));