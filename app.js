const express = require('express')
const app = express()

app.use(express.json());
// app.use(express.urlencoded({extended : true}));

//Routes
app.use(require("./routes/register"));
app.use(require("./routes/conversation"));
app.use(require("./routes/get-behaviour"));
app.use(require("./routes/post-behaviour"));


//Error Handlers
const errorHandlers = require('./handlers/errorHandlers');
app.use(errorHandlers.notFound);

if(process.env.ENV === "DEVELOPMENT"){
    console.log("")
    app.use(errorHandlers.developmentErrors);
} else{
    app.use(errorHandlers.internalServerError);
}

module.exports = app;
