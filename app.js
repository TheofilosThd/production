//import modules
var express = require('express');
var mongoose = require('mongoose');

var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app =  express();

const route = require('./routes/route');

//mongoose.connect('mongodb://localhost:27017/eLiquid-calc');
mongoose.connect('mongodb://admin:admin@ds011482.mlab.com:11482/eliquid-calculator');

mongoose.connection.on('connected',()=>{
  console.log('Connected to database @27017');
});

mongoose.connection.on('error',(err)=>{
  if(err){
    console.log('Error in connection : '+err);
  }
})

//const port = 3000;
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyparser.json());

//app.use(express.static(path.join(__dirname,'public')));
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use('/api',route);

//testing server
app.get('/',(req,res)=>{
  res.send('foobar');
});

app.listen(port ,()=>{
  console.log('Server started at port : '+port);
});
