require("dotenv").config();
const express = require("express");
const expressEjsLayout = require("express-ejs-layouts")
const path = require("path");
const mongoose = require('mongoose');


const app = express();



// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
// const connection = mongoose.connection;
// connection.once("open",()=>{
//     console.log("Database connected.....");
// }).on("err",()=>{
//     console.log("Connection failed....");
// })



// Assets
app.use(express.urlencoded({extended:false}))
app.use(express.json());



// Public set
app.use(express.static(path.join(__dirname,"public")));

// expressEjsLayout set
app.use(expressEjsLayout);
// View Engine set
app.set("views",path.join(__dirname,"resources/views"));
app.set("view engine", "ejs");

require("./routes/web")(app);
require("./routes/api")(app);

const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`Server is raning- http://127.0.0.1:${PORT}`)
})