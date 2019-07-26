
const mongoose = require("mongoose");
const Game = require("../models/Game");
const Comment = require("../models/Comment");



const games = [
  {
    name: "The Hunger Games",
    Speed: 27,
    Logic: 3,
    imageID: "iojfoifdkmsdkmfsdkomosmovmkvfdo",
    platforms: [
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      },
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      },
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      },
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      }
    ],
    timestamp: Date()
  }
]

const comments = [
  {
    description: "Hello cabronazo",
    userID: "iefidnv84389yfsjjh",
    timestamp: Date()
  },
  {
    description: "HAHAHAHAHA",
    userID: "fdvDFVFDHVIUD89834",
    timestamp: Date()
  }
]

mongoose
  .connect("mongodb://localhost/server", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    Game.insertMany(games)
      .then(data => {
        console.log(data);
        console.log("Chachi");
        mongoose.disconnect()
      })
      .catch(err => {
        console.log(err);
      });
      Comment.insertMany(comments)
      .then(data => {
        console.log(data);
        console.log("Chachis");
        mongoose.disconnect()
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
