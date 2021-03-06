const mongoose = require('mongoose')

if(process.argv.length < 3){
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://fullstack:${password}@cluster0.6ecea.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex: true})

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if(process.argv.length < 4){
    console.log('phonebook:')
    Person.find({})
        .then(entries => {
            entries.forEach(entry =>{
                console.log(`${entry.name} ${entry.number}`)
            })
            mongoose.connection.close()
            process.exit(1)
        }) 
}

const name = process.argv[3]
const number = process.argv[4]
const person = new Person({name,number})

person.save().then(result => {
    console.log(`added ${name} ${number} to phonebook`)
    mongoose.connection.close()
})