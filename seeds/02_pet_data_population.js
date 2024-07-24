/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Ralph', pet_type_id: 3},
    {id: 2, name: 'Larry', pet_type_id: 3},
    {id: 3, name: 'Ronald', pet_type_id: 2},
    {id: 4, name: 'Steve', pet_type_id: 1}

  ]);
  
};
