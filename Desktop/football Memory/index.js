const express = require("express");
const { MongoClient } = require("mongodb");

const mongoose = require("mongoose");
const Player = require("./models/playerModel");
const Club = require("./models/clubModel");

const port = 3000;
const app = express();

// Connect to MongoDB Atlas
const uri =
  "mongodb+srv://samer:samerhassan11@cluster0.hie6fnm.mongodb.net/footballmemory"; // Replace 'mydatabase' with your actual database name
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

connect();

// Start the Express server
app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
