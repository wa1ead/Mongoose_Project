const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
  {name: String, required: true},
  age: Number,
  favoriteFoods: Array
})
