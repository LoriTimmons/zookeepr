const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require("fs");
const path = require("path");
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')


// parse incoming string data or array data
// Middle ware
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// parse incoming JSON data
app.use(express.json());
app.use(express.static("public"));

// Creating a route that the front end can request data from
const { animals } = require("./data/animals");
// const data = require('./data/animals');
// const animals = data.animals;
// console.log("Look" , data.animals);

// Keep at end
app.listen(PORT, () => {
  console.log("API server now on port ${PORT}!");
});

// 11.4.6
