module.exports = {
    host: "localhost",
    user: "root",
    pass: "p@ssw0rd",
    db: "crud_demo",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
