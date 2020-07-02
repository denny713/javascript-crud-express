module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        username: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        nama: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.INTEGER
        }
    }, {
        tableName: 'user'
    });
    return User;
};
