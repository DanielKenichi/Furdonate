/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('artist', function(table){
        table.string('id').primary();
        table.string('name').unique().notNullable();
        table.string('email').notNullable();
        table.string('discord_server').notNullable();
        table.string('country');

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('artist');
};
