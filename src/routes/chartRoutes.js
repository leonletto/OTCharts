const express = require('express');
const charts = require('../models/Charts.js');

const router = express.Router();

router.get('/api/reporting/v1/dashboard/widget/5e178d8d22ccee0013c0b1e5',async(req,res) => {
   console.log("one!");
   res.send(charts.data[0]);
});

router.get('/api/reporting/v1/dashboard/widget/5e17938422ccee0013c0b1eb',async(req,res) => {
   console.log("two!");
   res.send(charts.data[1]);
 });
 
 router.get('/',async(req,res) => {
   console.log("two!");
   res.send('<html><head></head><body>hello world!</body></html>');
 });


module.exports = router;