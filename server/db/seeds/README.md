# Knex Seeds

## Naming Convention
The files correspond to single tables. The name begins with the same time code as the beginning of the migration that generated the table. This ensures that they are run in the correct order to satisfy foreign key constraints.

Made with:
```$ knex seed:make <seed_name>```

Run from within the server directory via:
```$ knex seed:run```
