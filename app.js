const express = require('express');
const db = require('./db');
const usuarioRouter = require('./routers/usuarioRouter');

const app = express()
const port = 3000

app.use(express.json());
app.use('/usuarios',usuarioRouter);

db.then(() => {
app.listen(port, () => {
    console.log('Server app listening at http://localhost:${port}')
})
}).catch(console.log)