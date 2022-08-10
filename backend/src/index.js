// import app from "./app"
const app = require('./app');
const { conn } = require('./db')

conn.sync({force:true}).then(() => {
    app.listen(3000,()=>{
        console.log("listening")
    });
});