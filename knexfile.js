

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/transit_dev',
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds/development`,
    },
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/transit_test',
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds/development`,
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.RDS_HOSTNAME,
      port: process.env.RDS_PORT,
      database: process.env.RDS_DB_NAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds/development`,
    },
  },
};
