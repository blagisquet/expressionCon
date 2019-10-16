const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./conf');

const api = express();

connection.connect((err) => {
    if (err) throw err;
    console.log('connected to MYSQL database');
  });

// Support JSON-encoded bodies
api.use(bodyParser.json());
// Support URL-encoded bodies
api.use(bodyParser.urlencoded({
  extended: true,
}));

api.get('/zboub',  (req, res) => {
      if (err) {
        console.log(err)
        res.sendStatus(403);
      } else {
        connection.query(
          'SELECT * FROM  expressions',
          (err, result) => {
            if (err) throw err;
            res.send(result);
          }
        );
      }
  });
  