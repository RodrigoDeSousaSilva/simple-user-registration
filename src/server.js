//rotas que ligam diratamente o servidor
/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { // resposta / requisição
    //get exibir dados
    //post - receber dados
    //put atualizar dados
    //delete deletar dados
    res.send('Hello word!') //enviar dados
}) 
/*
app.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`)
}) // listen - inicializar servidor
*/


const cors = require('cors')
const express = require('express')
const { routes } = require('./routes')



const app = express()
app.use(express.json())
app.use(cors())
routes(app)

const port = 3000

routes
app.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`)
})