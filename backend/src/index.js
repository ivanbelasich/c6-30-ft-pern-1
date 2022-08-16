const app = require('./app');
const sequelize = require('./sequelize')

sequelize.sync({force:true}).then(() => {
    app.listen(process.env.PORT,()=>{
        console.log("listening")
    });
});