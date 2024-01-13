const express = require('express')
const router = require('./routes')
const connectDB = require('./db/connect')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use('/api/v1/tasks', router)

const port = process.env.PORT;
const url = process.env.MONGO_URI;
const start = async()=> {
    try {
        await connectDB(url)
        app.listen(port, ()=> {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log('DB connection was unsuccessful');
    }
}
start()