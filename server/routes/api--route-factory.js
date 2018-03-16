/**
 * Creates RESTful routes for interacting with a database table
 *
 * In order to have a consistent api for the client javacript,
 * we use a route factory for all tables that we want it to
 * have access to.
 * It modifies a given router with the new routes. The format is
 * /api/<table_name> + /api/<table_name>/:id
 *
 * Custom routes mounted before the factory are not overriden.
 */

"use strict";
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

/** Mounts database access routes onto the Router */
function dbRouteFactory(router, knex, tableName) {
  dbGetTable(router, knex, tableName);
  dbGetInstance(router, knex, tableName);
  dbPostNew(router, knex, tableName);
  dbDeleteInstance(router, knex, tableName);
  dbUpdateInstance(router, knex, tableName);
}

/**
 * Gets all records from a table via GET /api/<tablename>
 * Supports limiting the number via /api/<tablename>?limit=<number>
 * Supports filtering records via /api/<tablename>?<field>=<value>
 * Supports multiple fiters via /api/<tablename>?limit=<number>&<field1>=<value1>?<field2>=<value2>
 */
function dbGetTable(router, knex, tableName) {
  router.get(`/api/${tableName}`, (request, response) => {
    const dbQuery = knex
      .select()
      .from(tableName)
      .orderBy('created_at');
    for (const field of Object.keys(request.query)) {
      if (field.toLowerCase() === 'limit') {
        dbQuery.limit(request.query[field])
      } else {
        dbQuery.where(field, request.query[field]);
      }
    }
    dbQuery
      .then(results => response.json(results))
      .catch(error => response.status(422).send(error.detail));
  });
}

/**
 * Gets a single record from a table via it's id
 * GET /api/<tablename>/<id>
 */
function dbGetInstance(router, knex, tableName) {
  router.get(`/api/${tableName}/:id`, (request, response) => {
    knex
      .select()
      .from(tableName)
      .where('id', request.params.id)
      .orderBy('created_at')
      .then(results => response.json(results))
      .catch(error => response.status(422).send(error.detail));
  });
}

/**
 * Creates new records via an HTTP post and parsting the request body
 * POST to /api/<tablename>
 */
function dbPostNew(router, knex, tableName) {
  router.post(`/api/${tableName}`, ensureLoggedIn, (request, response) => {
    knex(tableName)
      .insert(request.body)
      .returning('id')
      .then(results => response.json(results))
      .catch(error => response.status(422).send(error.detail));
  });
}

/**
 * Delete a single record from a table via it's id
 * DELETE /api/<tablename>/<id>
 */
function dbDeleteInstance(router, knex, tableName) {
  router.delete(`/api/${tableName}/:id`, ensureLoggedIn, (request, response) => {
    knex(tableName)
      .where('id', request.params.id)
      .del()
      .then(results => {
        if (results === 0) {
          response.status(404).send('No record found to delete');
        } else {
          response.status(200).json(results);
        }
      })
      .catch(error => response.status(422).send(error.detail));
  });
}

/**
 * Update a single record from a table via it's id
 * PATCH /api/<tablename>/<id>
 */
function dbUpdateInstance(router, knex, tableName) {
  router.patch(`/api/${tableName}/:id`, ensureLoggedIn, (request, response) => {
    knex(tableName)
      .where('id', request.params.id)
      .update(request.body)
      .update('updated_at', knex.fn.now())
      .then(results => response.json(results))
      .catch(error => response.status(422).send(error.detail));
  });
}

module.exports = dbRouteFactory;
