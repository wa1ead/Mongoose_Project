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

// const person = new Person({ name: "Walid", age: 22, favoriteFoods: "fish" });

// person
//   .save()
//   .then(() => {
//     console.log(person);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

async function arrayOfPeople() {
  const people = await Person.create([
    {
      name: "Yassine",
      age: 20,
      favoriteFoods: "pastilla",
    },
    {
      name: "Moussa",
      age: 33,
      favoriteFoods: "tajine",
    },
    {
      name: "Lmorphine",
      age: 42,
      favoriteFoods: "pastech",
    },
    {
      name: "inkonnu",
      age: 28,
      favoriteFoods: "baghrir",
    },
    { name: "EGT", age: 26, favoriteFoods: "jackda" },
  ]);

  console.log(people);
}

arrayOfPeople();
