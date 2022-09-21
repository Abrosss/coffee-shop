const express = require("express");
const app = express();
const path = require('path');
const mainRoutes = require("./routes/main");
//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });


//Static Folder
app.use(express.static("public"));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Setup Routes For Which The Server Is Listening

app.use("/", mainRoutes);
//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
