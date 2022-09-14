/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('donation', function(table){
        table.increments();

        table.string('nickname').notNullable().defaultTo('Anonymous');
        table.decimal('value').notNullable();
        table.string('message');
        
        table.string('artist_id').notNullable();

        table.foreign('artist_id').references('id').inTable('artist');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('donation');
};
