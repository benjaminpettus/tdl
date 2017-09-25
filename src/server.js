const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000




app.get('/', ( request, response ) => {
  response.send('turnt')
})






app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
