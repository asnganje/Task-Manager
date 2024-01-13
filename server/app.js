const express = require('express')
const app = express()
require('dotenv').config()


app.get('/api/v1/tasks', (req,res)=> {
    res.send('Tasks page')
})

const port = process.env.PORT;

app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}...`);
})