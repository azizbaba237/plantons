// import express dependencies
const express = require("express");

// create an express app
const app = express();

// configure express app
app.use(express.json());

// cors
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  Credential: true,
  allowedHeaders: ["session", "content-type"],
  exposedHeaders: ["sessionId"],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: true,
};
app.use(cors(corsOptions));

// load env variables
require("dotenv").config({ path: "./.env" });


// database
require("./config/database");

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Road for image
app.use('/uploads', express.static('uploads'));

// routes
app.use("/", require("./routes/product.route"));

// Start our server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});


