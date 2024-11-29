import { createUserData, showUserData, updateUserData, deleteUserData } from "../crontrollers"


const userRoutes = app =>{
    app.post('/criarUsuario', createUserData)
    app.get('/exibirUsuario', showUserData)
    app.put('/atualizarUsuario', updateUserData)
    app.delete('/deletarUsuario', deleteUserData)
}

export{
    userRoutes
}