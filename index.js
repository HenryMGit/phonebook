const express = require('express')
const app = express()

app.use(express.json())

let phoneBookEntries =[
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    },
]


app.get('/api/persons', (req, res)=>{
    res.json(phoneBookEntries)
})

app.get('/api/persons/:id', (req,res) =>{
    const id = Number(req.params.id)
    const person = phoneBookEntries.find(entry => entry.id === id)
    if(person)
        res.json(person)
    else
        res.status(404).end()
})

app.get('/info', (req,res) => {
    let date =  new Date()
    let msg = `Phonebook has info for ${phoneBookEntries.length} people <br />${date}`
    res.send(msg)
})

app.delete('/api/persons/:id', (req, res) =>{
    const id = Number(req.params.id)
    phoneBookEntries = phoneBookEntries.filter(entry => entry.id !== id)
    res.status(204).end()
})

app.post('/api/persons', (req, res) =>{
    const id = Math.floor(Math.random() * (1000-10+1)) + 10;
    const person = req.body
    if(!person.name || !person.number){
        return res.status(400).json({
            error: 'content missing'
        })
    }

    if(phoneBookEntries.find(entry => entry.name === person.name)){
        return res.status(409).json({
            error: 'name must be unique'
        })
    }
    person.id = id
    phoneBookEntries=phoneBookEntries.concat(person)
    res.json(person)
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})