const express = require("express");
const port =process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app =express()

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"))
app.use(express.json())

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.listen(port, ()=>console.log("server starting at"+ port))

