const express = require('express');
const charts = require('../models/Charts.js');

const router = express.Router();

router.get('/api/reporting/v1/dashboard/widget/5e178d8d22ccee0013c0b1e5',async(req,res) => {
   res.send(charts.data[0]);
});

router.get('/api/reporting/v1/dashboard/widget/5e17938422ccee0013c0b1eb',async(req,res) => {
   res.send(charts.data[1]);
 });
 
 router.get('/api/reporting/v1/dashboard/widget/5e1792d322ccee0013c0b1ea',async(req,res) => {
  res.send(charts.data[2]);
});

 router.get('/',async(req,res) => {
   res.send('<html><head></head><body>Hello OneTrust!</body></html>');
 });

 router.use('/dist',express.static(__dirname + '/dist'));

 router.get('/dist/login/*',async(req,res) => {
    res.sendFile(__dirname + '/dist/login/login.html');
 });
 
module.exports = router;