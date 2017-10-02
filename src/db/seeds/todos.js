
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, content: 'y tho?'},
        {id: 2, content: 'this'},
        {id: 3, content: 'that'}
      ]);
    });
};
