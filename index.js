var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var route = require('./server/routes/route');
var app = express();
mongoose.connect("mongodb://localhost:27017/user");

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});
mongoose.connection.on('error', (err) => {
    console.log(err);
});

app.use(bodyparser.json());
app.use('/api', route);

const PORT = 3000;
app.get('/', (req, res) =>  {
  res.send("Hello World");
});
app.listen(PORT, () => {
    console.log("connected to port" + PORT);
});
