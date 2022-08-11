// import app from "./app"
const app = require('./app');
const { conn } = require('./db')

conn.sync({force:true}).then(() => {
    app.listen(process.env.PORT,()=>{
        console.log("listening")
    });
});