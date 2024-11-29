//manipulo os dados e salvo
const users = [{ name: "", password: "", email: "", id: "" }]

function createUser(user) {
  users.name = user.name;
  users.password = user.password;
  users.email = user.email;
  users.id = user.id;
  
  return users;
}

function updateUser(updates) {
  users.name = updates.name;
  users.password = updates.password;
  users.email = updates.email;
  users.id = updates.id;

  return users;
}

function deleteUser(){
  users.name = ''
  users.password = '' 
  users.email = ''
  users.id = ''
}


export{users}

export { createUser, updateUser, deleteUser}; //exporta para todo mundo a funcao
