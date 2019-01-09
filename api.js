const express = require('express')
const app = new express();

const port = 7000


app.use(require('./controllers'));

app.listen(port, () => console.log(`running on ${port}`));