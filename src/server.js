const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000




app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', ( request, response ) => {
  response.render('index')
})

app.get('/new', ( request, response ) => {
  response.render('new')
})


app.post('/new', (request, response) => {
  const { content } = request.body
  console.log('content from route >>',content)
  response.render('index')
})

// app.put('', ( request, response ) => {
//     response.render('home')
// })

// app.delete('/', ( request, response ) => {
//   response.redirect('home')
// })

app.use((request, response) => {
  response.status(404).render('not-found')
})





app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
