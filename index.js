const express = require('express');
const chartRoutes = require('./src/routes/chartRoutes');

const app = express();
app.use(chartRoutes);

const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log('Listening on port '+ port);
});
