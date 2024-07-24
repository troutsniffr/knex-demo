/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('food_type', table => {
        table.increments('id'); // adds an auto incrementing PK column
        table.string('name', 250).notNullable(); // equivalent of varchar(255)
        table.string('description', 250).notNullable(); // equivalent of varchar(255)
        table.timestamps(true, true); // utility columns, adds created_at and updated_at
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('food_type');
};
