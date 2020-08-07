const express = require('express');
const cors = require('cors')
const app = express();
//calling all documents Json
const about = require('./JSON/About.json');
const portfolio = require('./JSON/Portfolio.json');

app.use(cors());
//server configuration
const port = process.env.PORT || 8080;

app.listen(port, () =>{
    console.log(`server on port: ${port}`)
    console.log(`it's work mommy, i'm so happy`)
})

//routes for api
app.get('/', (req, res) => {
    res.send('My API portfolio')
});

app.get('/about', (req, res) => {
    res.json(about)
});

app.get('/portfolio', (req, res) => {
    res.json(portfolio)
});