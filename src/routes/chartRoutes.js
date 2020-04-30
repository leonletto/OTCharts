const express = require('express');
const charts = require('../models/Charts.js');

const router = express.Router();

router.get('/api/reporting/v1/dashboard/widget/5ea77f83572a55000ca10f17',async(req,res) => {
   res.send(charts.data[0]);
});

router.get('/api/reporting/v1/dashboard/widget/5ea92e0cafd5c8000d398382',async(req,res) => {
   res.send(charts.data[1]);
 });
 
router.get('/api/reporting/v1/dashboard/widget/5ea77f83572a55000ca10f18',async(req,res) => {
  res.send(charts.data[2]);
});

 router.get('/',async(req,res) => {
   res.send('<html><head></head><body>Hello OneTrust!</body></html>');
 });

module.exports = router;