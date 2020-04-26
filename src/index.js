const express = require('express');
const chartRoutes = require('./routes/chartRoutes');

const app = express();
app.use(chartRoutes);

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
    console.log('Listening on port '+ PORT);
});
