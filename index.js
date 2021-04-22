require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(express.static('build'))
app.use(express.json())             
app.use(cors())

morgan.token('person',(req) =>{
    if(!req.body.name)
        return 
    const personData = {
        name: req.body.name,
        number: req.body.number
    }
    return JSON.stringify(personData)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'))

app.get('/api/persons', (req, res)=>{
    Person.find({}).then(persons => res.json(persons))
})

app.get('/api/persons/:id', (req,res, next) =>{
    Person.findById(req.params.id)
        .then(person => {
            if(person)
                res.json(person)
            else
                res.status(404).end()
        })
        .catch(error => next(error))
})

app.get('/info', (req,res,next) => {
    let date =  new Date()
    Person.count({})
        .then(count => res.send(`Phonebook has info for ${count} people <br /> ${date}`) )
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(result => res.status(204).end())
        .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) =>{
    const body = req.body

    const person = new Person({
        name: body.name,
        number: body.number
    })
    person.save()
        .then(savedPerson => res.json(savedPerson))
        .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) =>{
    const body = req.body
    const person = {
        number: body.number
    }

    Person.findByIdAndUpdate(req.params.id, person,{new:true, runValidators:true})
        .then(updatedPerson => {
            if(updatedPerson !== null)
                res.json(updatedPerson)
            else
                throw new Error('Person Not Found')
        })
        .catch(error => next(error))
})


const errorHandler = (error, req, res, next) => {
    console.log(error.message)
    if(error.name === 'CastError')
        return res.status(400).send({error: 'malformatted id'})
    else if(error.name === 'ValidationError')
        return res.status(400).json({error: error.message})
    next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT 

app.listen(PORT)