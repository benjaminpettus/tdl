
exports.up = function(knex, Promise) {
  return knex.schema.createTable( 'todos', ( table ) => {
    table.increments()
    table.string('content')
    table.date('created_on', true).defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable( 'todos' )
};
