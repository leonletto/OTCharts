const express = require('express');
const chartRoutes = require('./src/routes/chartRoutes');
const https = require('follow-redirects').https;
const bodyParser = require('body-parser');
const charts = require('./src/models/Charts.js');
var path = require('path');
var qs = require('querystring');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));
app.use(chartRoutes);

const port = process.env.PORT || 1337;

let bear = 'Hi';

app.post('/api/reporting/v1/dashboard/widget/bear', async(req,res)=>{
    const {bearer} = req.body;
    if(!bearer){
        res.status(422).send({error:'You must provide a bear'});
    } else{
      bear = bearer;
      res.status(200).send("Ok");
    }   
  });
  
  app.post('/api/access/v1/oauth/token', async(req,res0)=>{
    const {username,password,domain} = req.body;
    if(!username |  !password | !domain ){
        res.status(422).send({error:'You must provide a username, password, and domain.'});
    } else {
      var options = {
        'method': 'POST',
        'hostname': domain + '.otprivacy.com',
        'path': '/api/access/v1/oauth/token',
        'headers': {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cookie': '__cfduid=deed201afd27e50d8dc45ea9a40b913f91587694655'
        },
        'maxRedirects': 20
      };  
      var req2 = https.request(options, function (res) {
        var chunks = [];
      
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        res.on("end", function (chunk) {
          var body = Buffer.concat(chunks);
          res0.send(body);
          console.log(body.toString());
        });
      
        res.on("error", function (error) {
          console.error(error);
          res0.send(error);
        });
      });

      var postData = qs.stringify({
        'grant_type': 'password',
        'scope': 'read',
        'username': username,
        'password': password,
        'client_id': 'onetrust'
      });
      req2.write(postData);  
      req2.end();    
    }   
  });

app.get('/api/reporting/v1/dashboard/widget/:id', async(req, res0) => {
    route = req.params.id;
    // const {bear} = req.header.Authorization; //final auth is going to use this
    if(bear.length > 10)
    {   
        let options = {
          'method': 'GET',
          'hostname': 'demo1.otprivacy.com',
          'path': '/api/reporting/v1/dashboard/widget/'+route,
          'headers': {
            'Authorization': 'Bearer '+ bear, 
            'Cookie': '__cfduid=deed201afd27e50d8dc45ea9a40b913f91587694655'
          },
          'maxRedirects': 20
        }
        https.request(options, function (res) {
        var chunks = [];
      
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        res.on("end", function (chunk) {
          var body = Buffer.concat(chunks);
          res0.send(body);
        });
      
        res.on("error", function (error) {
          console.error(error);
        });
      }).end();
    }
 });

app.use(express.static(path.join(__dirname, '/src/dist')));

app.get('/*', async(req,res) => {
  res.sendFile('index.html',{root: path.join(__dirname, '/src/dist')});
});

app.listen(port, () => {
    console.log('Listening on port '+ port);  
});
