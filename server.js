// importing the libraries
const express       = require('express');
const bodyParser    = require("body-parser");
const mongoose      = require("mongoose");      

// routes
const users     = require('./routes/api/users');
const profile   = require('./routes/api/profile');
const posts     = require("./routes/api/posts");

// creating instance of the app
const app = express();

// db uri
const db = require('./config/keys').mongoURI;
console.log(db);
// connect
mongoose.connect(db,{ useNewUrlParser: true})
        .then(()=>console.log("mongodb connected"))
        .catch(err=>console.log(err));

// route get root
app.get('/',function(req,res){
    res.send("hello world");
});

// use these routes 
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

// creatin port to listen
const port = process.env.PORT || 3000;

// listen to port 3000 for now 
app.listen(port,()=>{
    console.log("hi iam running");
});
