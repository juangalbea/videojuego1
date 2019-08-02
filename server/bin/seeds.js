
const mongoose = require("mongoose");
const Game = require("../models/Game");
const Comment = require("../models/Comment");



const games = [
  {
    name: "The Hunger Games",
    Speed: 27,
    Logic: 3,
    imageID: "https://pixabay.com/get/57e4dd404f50a814f6da8c7dda79367f1c36d9e351526c4870297fd29e44cc58ba_1280.jpg",
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
  },
  {
    name: "HAHAHAHAHAHA",
    Speed: 27,
    Logic: 3,
    imageID: "https://pixabay.com/get/55e1d0454e56ac14f6da8c7dda79367f1c36d9e351526c4870297fd19e4dc25db8_1280.jpg",
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
  },
  {
    name: "Jesús y Carleto",
    Speed: 27,
    Logic: 3,
    imageID: "https://pixabay.com/get/54e6d04a4a50af14f6da8c7dda79367f1c36d9e351526c4870297fd3974ec55bbb_1280.jpg",
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
  },
  {
    name: "Siiiitooo",
    Speed: 27,
    Logic: 3,
    imageID: "https://pixabay.com/get/5ee3dc414a5ab108f5d08460962936771c38d8e7504c704c732b7cd4934cc259_1280.jpg",
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
  },
  {
    name: "Datos para ti",
    Speed: 27,
    Logic: 3,
    imageID: "https://pixabay.com/get/57e1d74b4253a914f6da8c7dda79367f1c36d9e351526c4870297fd3974ec05cbf_1280.jpg",
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
  },
  {
    name: "jaska",
    Speed: 27,
    Logic: 3,
    imageID: "https://pixabay.com/get/55e0d74a4c54a914f6da8c7dda79367f1c36d9e351526c4870297fd3974ec05cbf_1280.jpg",
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
