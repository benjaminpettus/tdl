const chai = require('chai')
const expect = chai.expect
const Todos = require('../db/queries')

console.log(Todos)

describe( 'queries', () => {

  it('should get all todos', () => {
    Todos.getAll()
    .then(todos => { console.log('in query',todos)})
  })

})
