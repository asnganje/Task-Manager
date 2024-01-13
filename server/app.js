const express = require('express')
const router = require('./routes')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use('/api/v1/tasks', router)

const port = process.env.PORT;

app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}...`);
})