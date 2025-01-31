module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PORT: "5432",
    PASSWORD: "D3v310p34*DF5",
    DB: "demo-pg-node",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };