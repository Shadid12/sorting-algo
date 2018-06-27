import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/main.routes';

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

// routes
app.use('/', routes)

// initial server
const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
  const {address, port} = server.address();
  console.log(`Example app listening at http://${address}:${port}`);
})