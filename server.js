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

// async function arrayOfPeople() {
//   const people = await Person.create([
//     {
//       name: "Yassine",
//       age: 20,
//       favoriteFoods: "pastilla",
//     },
//     {
//       name: "Moussa",
//       age: 33,
//       favoriteFoods: "tajine",
//     },
//     {
//       name: "Lmorphine",
//       age: 42,
//       favoriteFoods: "pastech",
//     },
//     {
//       name: "inkonnu",
//       age: 28,
//       favoriteFoods: "baghrir",
//     },
//     { name: "EGT", age: 26, favoriteFoods: "jackda" },
//   ]);

//   console.log(people);
// }

// arrayOfPeople();

// async function fetchName() {
//   try {
//     const names = await Person.find({ name: "Walid" });
//     console.log(names);
//   } catch (err) {
//     console.error(err);
//   }
// }

// fetchName();

// async function fetchFood() {
//   try {
//     const foods = await Person.findOne({ favoriteFoods: { $in: "pastech" } });
//     console.log(foods);
//   } catch (err) {
//     console.error(err);
//   }
// }

// fetchFood();

// async function fetchId() {
//   try {
//     const identity = await Person.findById({
//       _id: "6720a4e521a690ecc5b907e4",
//     });
//     console.log(identity);
//   } catch (err) {
//     console.error(err);
//   }
// }

// fetchId();

// Person.findById({ _id: "6720c656d54a836167bbc57b" })
//   .then((food) => {
//     food.favoriteFoods.push("couscous");
//     food.save();
//     console.log(food);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

Person.findOneAndUpdate(
  { name: "Lmorphine" },
  { $set: { age: 20 } },
  { new: true }
)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
