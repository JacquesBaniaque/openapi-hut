import express from 'express'

const router = express.Router();
const app = express();

const {
  PORT = 3000,
} = process.env;

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log('server started at http://localhost:'+PORT);
});