/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE food_type CASCADE')
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'Bird Seed', description: 'bag of seeds'},
    {id: 2, name: 'Meow Mix', description: 'can of wet food'},
    {id: 3, name: 'Ol Roy', description: 'bag of ground and compressed pig hoofs'},
    {id: 4, name: 'Live Insects', description: 'box of crickets'}
  ]);
};
