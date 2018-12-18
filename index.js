const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const getArea = require('./area.js')

app.use(bodyParser.json());


const PORT = process.env.PORT || 3000


app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.get('/getArea', async (req, res) => {
  // console.log(req.query.string); // :3000/prova?string=
  //console.log(req.query) :3000/prova?
  let array = [parseFloat(req.query.side1), parseFloat(req.query.side2)]
  console.log(array)
  let area = await getArea(array);
  console.log(area)
  if (area != -1) {
    let result = {
      area: area
    };
    res.status(200).json(result)
  } else {
    let result = {
      area: -1
    }
    res.status(400).json(result)
  }
});

let server = app.listen(PORT, () => console.log('Example app listening on port ' + PORT));
