// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const User = require("../models/User");

// const bcryptSalt = 10;

// mongoose
//   .connect('mongodb://localhost/server', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

// let users = [
//   {
//     username: "alice",
//     password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
//   },
//   {
//     username: "bob",
//     password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
//   }
// ]

// User.deleteMany()
// .then(() => {
//   return User.create(users)
// })
// .then(usersCreated => {
//   console.log(`${usersCreated.length} users created with the following id:`);
//   console.log(usersCreated.map(u => u._id));
// })
// .then(() => {
//   // Close properly the connection to Mongoose
//   mongoose.disconnect()
// })
// .catch(err => {
//   mongoose.disconnect()
//   throw err
// })


const mongoose = require("mongoose");
const Game = require("../models/Game");


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
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
