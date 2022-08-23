const app = require('./app');
const sequelize = require('./sequelize')

sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("listening")
    });
});