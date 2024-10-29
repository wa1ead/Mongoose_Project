require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("./Person");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.error(err);
  });

const person = new Person({ name: "Walid", age: 22, favoriteFoods: "fish" });

person
  .save()
  .then(() => {
    console.log(person);
  })
  .catch((err) => {
    console.error(err);
  });
