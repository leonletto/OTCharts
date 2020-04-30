const express = require('express');
const chartRoutes = require('./src/routes/chartRoutes');
const https = require('follow-redirects').https;
const bodyParser = require('body-parser');
const charts = require('./src/models/Charts.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));
app.use(chartRoutes);

const port = process.env.PORT || 1337;

let bear = '';

app.post('/api/reporting/v1/dashboard/widget/bear', async(req,res)=>{
    const {bearer} = req.body;
    if(!bearer){
        res.status(422).send({error:'You must provide a bear'});
    }else{
      bear = bearer;
      res.status(200).send("Ok");
    }   
  });
  

app.listen(port, () => {
    console.log('Listening on port '+ port);
    setInterval( function () {
        if(bear)
        {   
            console.log(bear);
            let options = {
                'method': 'GET',
                'hostname': 'demo2.otprivacy.com',
                'path': '/api/reporting/v1/dashboard/widget/5ea77f83572a55000ca10f18',
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
              charts.data[2] = body;
              console.log(body.toString());
            });
          
            res.on("error", function (error) {
              console.error(error);
            });
          }).end()}
            
        }, 3000);  
});
