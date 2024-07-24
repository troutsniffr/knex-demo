/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pet', table => {
        table.increments('id'); // adds an auto incrementing PK column
        table.string('name', 250).notNullable(); // equivalent of varchar(255)
        table.integer('pet_type_id');
        table.foreign('pet_type_id').references('pet_type.id');
        table.timestamps(true, true); // utility columns, adds created_at and updated_at
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('pet', table => {
        table.dropForeign('pet_type_id')
    })
    .then(function() {
        return knex.schema.dropTableIfExists('pet');
    });
};
