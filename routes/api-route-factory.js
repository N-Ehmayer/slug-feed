/**
 * Creates routes for interacting with a database table
 *
 * In order to have a consistent api for the client javacript,
 * we use a route factory to for all tables that we want it to
 * have access to.
 * It modifies a given router with the new routes. The format is
 * /api/<table_name> + /api/<table_name>/:id
 */

"use strict";

function dbRouteFactory(router, knex, tableName) {

  router.get(`/api/${tableName}`, (request, response) => {
    const dbQuery = knex
      .select()
      .from(tableName)
      .orderBy('created_at');
    for (const field of Object.keys(request.query)) {
      dbQuery.where(field, request.query[field]);
    }
    dbQuery
      .then(results => response.json(results))
      .catch(error => response.status(422).send(error.detail));
  });

  router.get(`/api/${tableName}/:id`, (request, response) => {
    knex
      .select()
      .from(tableName)
      .where('id', request.params.id)
      .orderBy('created_at')
      .then(results => response.json(results))
      .catch(error => response.status(422).send(error.detail));
  });

  router.post(`/api/${tableName}`, (request, response) => {
    knex(tableName)
      .insert(request.body)
      .returning('id')
      .then(results => response.json(results))
      .catch(error => response.status(422).send(error.detail));
  });

  router.delete(`/api/${tableName}/:id`, (request, response) => {
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

  router.patch(`/api/${tableName}/:id`, (request, response) => {
    knex(tableName)
      .where('id', request.params.id)
      .update(request.body)
      .update('updated_at', knex.fn.now())
      .then(results => response.json(results))
      .catch(error => response.status(422).send(error.detail));
  });
}

module.exports = dbRouteFactory;
