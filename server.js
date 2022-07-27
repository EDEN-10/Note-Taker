const express = require("express");
const port =3001 || process.env.PORT;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app =express()

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"))
app.use(express.json())

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.listen(port, ()=>console.log("server starting at"+ port))

