const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

console.log('DB_PASS:', process.env.DB_PASS); // Para verificar se a senha está sendo carregada
console.log('DB_USER:', process.env.DB_USER); // Verificar o usuário
console.log('DB_NAME:', process.env.DB_NAME); // Verificar o nome do banco
console.log('DB_HOST:', process.env.DB_HOST); // Verificar o host
console.log('DB_PORT:', process.env.DB_PORT); // Verificar a porta

const router = require('./routes/routes');

const app = express(); 
const port = 40000;

app.use(bodyParser.urlencoded({ extended: false, }));
app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
});
