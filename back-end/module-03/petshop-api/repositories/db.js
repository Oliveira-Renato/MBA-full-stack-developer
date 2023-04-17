import pg from 'pg';

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString: 'postgres://amhditcz:MeK3G-d-9ziVxnGINWOUwU2OJF7jtGE5@batyr.db.elephantsql.com/amhditcz'
  })
  global.connection = pool;

  return pool.connect();
}

export {
  connect
}