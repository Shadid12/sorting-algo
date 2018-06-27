import express from 'express'
import bodyParser from 'body-parser'


const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

// Enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//

// just to check if its working
app.get('/', (req, res) => res.send({'Hello': 'Worlds'}))

app.post('/merge', (req, res) => {
    let unsorted = req.body.unsorted;
    
    res.send({
        sorted: req.body.data
    })
})

// initial server
const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
  const {address, port} = server.address();
  console.log(`Example app listening at http://${address}:${port}`);
})