const knex = require('./knex')

const getAll = () => {
  return knex.select().from('todos')
  // .then(todos => {
  //   const todoObj = {}
  //   for(i = 0; i < todos.length; i++) {
  //       todoObj[i] = todos[i]
  //   }
  //   return todoObj
  // })
}

const addTodo = ( newContent ) => {
  return knex('todos').insert({content: newContent})
}

const deleteTodo = (id) => {
  return knex('todos').where('id', id).del()
}

const updateTodo = (id, newContent) => {
  return knex('todos').where('id', id)
    .update({
      content: newContent
    })
}
module.exports = {
  addTodo,
  getAll,
  deleteTodo,
  updateTodo
}
