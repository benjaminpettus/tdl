const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const db = require('./db/queries')
console.log('db in server_+_+',db)



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', ( request, response ) => {
  db.getAll()
  .then( todos => {
    console.log('Todo Length::;',todos)
    response.render('index', {todos})
  })
})

app.get('/new', ( request, response ) => {
  response.render('new')
})

app.post('/new', (request, response, next) => {
  const { content } = request.body
  db.addTodo(content)
  .then(() => {
    response.redirect('/')
  })
})

app.delete('/:id', ( request, response ) => {
  const {id} = request.params
  console.log(id)
  db.deleteTodo(id)
  .then( () => {
    response.json({message: 'sucessfully deleted'})
  })
})


app.use((request, response) => {
  response.status(404).render('not-found')
})





app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
