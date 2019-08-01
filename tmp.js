const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

const db = mongoose.connection

// to other file
const kittySchema = new mongoose.Schema({
  name: String
})
kittySchema.methods.speak = function () {
  const greeting = this.name
    ? `Meow name is ${this.name}`
    : "I don't have a name"
  console.log(greeting)
}
const Kitten = mongoose.model('Kitten', kittySchema)

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected!
  Kitten.find(function (err, kittens) {
    if (err) return console.error(err)
    console.log('cats we have:', kittens)
  })

  const silence = new Kitten({ name: 'Silence' })
  console.log(silence.name)
  silence.save(function (err, silence) {
    if (err) return console.error(err)
    silence.speak()

    Kitten.find(function (err, kittens) {
      if (err) return console.error(err)
      console.log('cats we have:', kittens)
    })
  })
})
